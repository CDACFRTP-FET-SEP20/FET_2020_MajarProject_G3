module.exports = app => {
    const quizes = require("../controllers/quize.controller.js");
  
    var router = require("express").Router();
  
    //Retrieve all Tutorials
    router.get("/", quizes.findAll);
  
    app.use('/api/quizes', router);
  };