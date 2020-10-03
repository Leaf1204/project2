//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const List = require("../../models/app");
const User = require("../../models/auth");

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
  
  List.find({"userid":req.session.userid, 'dateOf':new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate())}, (err, allTasks) => {
    //console.log("boo" + allTasks);
    var today = Date.now;
    res.render("index",{
      tasks:allTasks,
      userName: req.session.userName,
      today:`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
    });
  })
});

//create new list items
router.post("/", auth, (req, res) => {
   
    const insertObject = {
      userid : req.session.userid,
      description : req.body.task,
      status : false,
      //javascrip needs +one on month
      dateOf : new Date(new Date().getFullYear(),new Date().getMonth()+9 , new Date().getDate())
    };
    
    // console.log(insertObject);

    List.create(insertObject, (error, app) => {
      if(error){
        console.log("error: "+error);
      }
      res.redirect("/app");
    });
});

//update "done button"
router.put("/:id", (req, res) => {
  // todo : find product, then set status = true, then findByIdAndUpdate
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
  //List.findById(req.params.id, (err, product) => {
      res.render('show.jsx', { data : [
        {
          dateOf : "2020-09-29",
          totalItems : 5,
          completedItems : 3
        },
        {
          dateOf : "2020-09-30",
          totalItems : 4,
          completedItems : 4
        }
      ] });
  //});
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
    dateOf : Date.now()
  };
  
  // console.log(insertObject);

  List.create(insertObject, (error, app) => {
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
