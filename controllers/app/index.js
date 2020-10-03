//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const List = require("../../models/app/index");
const Goal = require("../../models/app/goal");

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

//index
router.get("/", auth, (req, res) => {
  // finds Individual users data

  // todo: find today's goal, then call the inner List.find and pass the correct data through
  Goal.find({"userid":req.session.userid, 'dateOf':new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate())}, (err, data)=>{
    let todayGoal = 0;
    if(data.length > 0){
      todayGoal = data[0].goal;
    }

    List.find({"userid":req.session.userid, 'dateOf':new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate())}, (err, allTasks) => {
      let totalTask = allTasks.length;
      let completedTask = allTasks.filter(x=> x.status).length;
      res.render("index",{
        tasks:allTasks,
        userName: req.session.userName,
        totalTask: totalTask,
        completedTask: completedTask,
        goal : todayGoal,
        today:`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
      });
    });
  });
});

//create new list items
router.post("/", auth, (req, res) => {
   
    const insertObject = {
      userid : req.session.userid,
      description : req.body.task,
      status : false,
      dateOf : new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate())
    };

    List.create(insertObject, (error, app) => {
      if(error){
        console.log("error: "+error);
      }
      res.redirect("/app");
    });
});

//update "done button"
router.put("/:id", (req, res) => {
  List.findByIdAndUpdate(req.params.id,{status:true}, (error, app) => {
    res.redirect("/app");
  });
});


//Delete
router.delete("/:id", (req, res) => {
  List.findByIdAndRemove(req.params.id, (err, app) => {
    res.redirect("/app");
  });
});

// SHOW
router.get('/stats', (req, res) => {
  // t-rav magic query that aggregates the number of completed and total items
  List.aggregate([{ $match: { userid: req.session.userid } },
                  {"$group" : {_id:{dateOf:"$dateOf"}, totalItems:{$sum:1}, completedItems: {$sum:{$cond:{if:{$eq: ["$status",true]}, then: 1, else : 0}} }}} ], 
                  (err, app)=>{
                    res.render('show.jsx', { data : app });
                  });
});

// //new
router.get("/goal", (req, res) => {
  res.render("New");
});

//create new list items
router.post("/goal", auth, (req, res) => {

  const insertObject = {
    userid : req.session.userid,
    goal : req.body.goal,
    dateOf : new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate())
  };
  
  Goal.create(insertObject, (error, app) => {
    if(error){
      console.log("error: "+error);
    }
    res.redirect("/app");
  });
});
///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
