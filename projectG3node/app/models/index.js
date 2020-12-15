const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.roles = require("./role.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.category=require("./category.model.js")(sequelize, Sequelize);
db.type=require("./type.model.js")(sequelize, Sequelize);
db.quize=require("./quize.model.js")(sequelize, Sequelize);
db.question=require("./question.model")(sequelize, Sequelize);
db.score=require("./score.model")(sequelize, Sequelize);
db.favourite=require("./favourite.model")(sequelize, Sequelize);
db.status=require("./status.model")(sequelize, Sequelize);
module.exports = db;