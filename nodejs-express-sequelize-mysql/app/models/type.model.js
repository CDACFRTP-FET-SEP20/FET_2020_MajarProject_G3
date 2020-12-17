module.exports = (sequelize, Sequelize) => {
  const Type = sequelize.define("type", {
    type: {
      type: Sequelize.STRING
    }
    
  });

  return Type;
};