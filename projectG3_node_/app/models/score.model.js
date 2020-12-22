module.exports = (sequelize, Sequelize,DataTypes) => {
    const Score= sequelize.define("score", {
      score: {
        type: Sequelize.INTEGER
      },
      submittedOn:{
        type: Sequelize.DATEONLY ,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
      // ,  
      // userid :{
      //       type:Sequelize.INTEGER,
      //       allowNull:false,
      //       references:{
      //           model: 'users',
      //           key: 'id'
      //       }
      //   },
      //   quizid :{
      //       type:Sequelize.INTEGER,
      //       allowNull:false,
      //       references:{
      //           model: 'quizes',
      //           key: 'id'
      //       }
      //   }
        
     
      
    },
    
    {
      timestamps: false
  });
  
    return Score;
  };