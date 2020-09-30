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

router.get("/", auth, (req, res) => {
  // todo : change to main display page
  List.find({}, (err, allTasks) => {
    //console.log("boo" + allTasks);
    
    res.render("index",{
      tasks:allTasks
    });
    
  })
});

router.post("/", auth, (req, res) => {
   
    const insertObject = {
      userid : req.session.userid,
      description : req.body.task,
      status : false,
      dateOf : Date.now()
    };
    
    console.log(insertObject);

    List.create(insertObject, (error, app) => {
      if(error){
        console.log("error: "+error);
      }
      res.redirect("/app");
    });
});

//update
router.put("/:id", (req, res) => {
  // todo : find product, then set status = true, then findByIdAndUpdate
  List.findByIdAndUpdate(req.params.id,{status:true}, (error, app) => {
    res.redirect("/app");
  });
});

// //new
// router.get("/new", (req, res) => {
//   res.render("New");
// });
///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
