module.exports = (sequelize, Sequelize) => {
    const Favourite = sequelize.define("favourite", {
      
      
      quizid :{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:'quizes',
            key:'id'
        }
    },
    userid :{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:'users',
            key:'id'
        }
    }
      
      
    },
    {
        timestamps:false,
        underscored:true
      });
  
    return Favourite;
  };