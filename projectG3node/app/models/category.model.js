module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
      category: {
        type: Sequelize.STRING
      },
    },
    {
      timestamps:false,
      underscored:true
    }
    );
  
    return Category;
  };


  