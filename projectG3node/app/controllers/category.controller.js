const db = require("../models");
const categoryy = db.category;

const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body.category) {
//     res.status(400).send({
//       message: "Content can not be empty!",
//     });
//     return;
//   }

//   // Create a Tutorial
//   const cat = {
//     category: req.body.category,
//   };

//   // Save Tutorial in the database
//   categoryy
//     .create(cat)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Tutorial.",
//       });
//     });
// };
// exports.findOne = (req, res) => {
//   const catg = req.params.catg;
//   console.log(catg);

//   categoryy
//     .findOne({ where: { category: catg } })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error retrieving Tutorial with id=" + id,
//       });
//     });
// };

exports.findAll = (req, res) => {
  const category = req.query.category;
  var condition = category
    ? { category: { [Op.like]: `%${category}%` } }
    : null;

  categoryy
    .findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
