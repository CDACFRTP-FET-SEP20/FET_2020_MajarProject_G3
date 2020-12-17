const db = require("../models");
const score = db.score;
exports.getMaxScore = (req,res) =>{ 
    const id = req.params.id;
    score.findOne({
        include: ["usersc"],
        where: { quizeId:id } ,
    attributes: [[db.sequelize.fn('max', db.sequelize.col('score')), 'maxscore']],

  }).then(data => {
    res.send(data);
    console.log(data);
      })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  })};