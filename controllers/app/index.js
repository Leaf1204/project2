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
  res.render("index");
});

router.post("/", auth, (req, res) => {

    let insertObject = {
      userName : "larry", //auth.userName,
      description : req.body.task,
      status : false,
      dateOf : Date.now()
    };
    
    console.log(insertObject);

    List.create(insertObject, (error, app) => {
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
