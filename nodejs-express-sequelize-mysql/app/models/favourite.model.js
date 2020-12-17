module.exports = (sequelize, Sequelize) => {
    const Favourite = sequelize.define("favourite", {
      status:{
          type:Sequelize.BOOLEAN
      }
      
    //   quizid :{
    //     type:Sequelize.INTEGER,
    //     allowNull:false,
    //     references:{
    //         model:'quizes',
    //         key:'id'
    //     }
    // },
    // userid :{
    //     type:Sequelize.INTEGER,
    //     allowNull:false,
    //     references:{
    //         model:'users',
    //         key:'id'
    //     }
    // }
      
      
    });
  
    return Favourite;
  };