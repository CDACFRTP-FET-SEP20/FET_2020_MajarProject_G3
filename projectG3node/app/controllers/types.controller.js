const db = require("../models");
const types = db.type;

// const Op = db.Sequelize.Op;

// // // Create and Save a new Tutorial
// exports.create = (req, res) => {
//    // Validate request
//    if (!req.body.type) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//     return;
//   }

//   // Create a Tutorial
//   const newtype = {
//     type: req.body.type,
    
//   };

//   // Save Tutorial in the database
//   types.create(newtype)
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




// exports.findAll = (req, res) => {
//     const type = req.query.type;
//     var condition = type ? { type: { [Op.like]: `%${type}%` } } : null;
  
//     types.findAll({ where: condition })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving tutorials."
//         });
//       });
//   };
