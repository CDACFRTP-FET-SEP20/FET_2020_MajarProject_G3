module.exports = app => {
  const scr = require("../controllers/score.controller");

  var router = require("express").Router();

 

  //Retrieve all Tutorials
  router.get("/:id",scr.getMaxScore);

  // Retrieve all published Tutorials
  

  app.use('/api/scr', router);
};