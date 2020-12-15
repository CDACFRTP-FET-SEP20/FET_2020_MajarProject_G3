const db = require("../models");
const quizes = db.quize;

const Op = db.Sequelize.Op;

// // Create and Save a new Tutorial
// exports.create = (req, res) => {
//    // Validate request
//    if (!req.body.categoryid) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//     return;
//   }

//   // Create a Tutorial
//   const cat = {
//     quizname: req.body.quizname,
//     time: req.body.time,
//     count: req.body.count,
//     categoryid: req.body.categoryid
//   };

//   // Save Tutorial in the database
//   quizes.create(cat)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Tutorial."
//       });
//     });
// };

//insert

var allQuize;
exports.addQuize = (req, res) => {
  db.sequelize
    .query(
      "insert into quizes(id,quizname,time,count,categoryid) values (?,?,?,?,(select id from categories where category=?))",
      {
        replacements: [
          req.body.id,
          req.body.quizname,
          req.body.time,
          req.body.count,
          req.body.category,
        ],
        type: db.sequelize.QueryTypes.INSERT,
      }
    )
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

exports.getCategoryName = (req, res) => {
  db.sequelize
    .query("select * from categories", { type: db.sequelize.QueryTypes.SELECT })
    .then((data) => {
      res.send(data);
      console.log(data);
    });
};

// exports.getbtquize = (req,res)=>{
//   db.sequelize.query("select * from quizes where categoryid=?",
//   {replacements: [req.params.categoryid],type: db.sequelize.QueryTypes.SELECT,}
//   ).then(data=>{
//       res.send(data);
//      console.log(data);
//     });
// }

exports.getQuize = (req, res) => {
  const id = req.params.id;
  quizes
    .findAll({
      where: { categoryid: id },
    })
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find a single Tutorial with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   quizes
//     .findByPk(id)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error retrieving Tutorial with id=" + id,
//       });
//     });
// };

// exports.findAll = (req, res) => {
//   const quizname = req.query.quizname;
//   var condition = quizname
//     ? { quizname: { [Op.like]: `%${quizname}%` } }
//     : null;

//   quizes
//     .findAll({ where: condition })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials.",
//       });
//     });
// };
