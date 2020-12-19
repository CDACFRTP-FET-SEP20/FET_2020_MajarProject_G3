module.exports = (sequelize, Sequelize) => {
    const Score= sequelize.define("score", {
      score: {
        type: Sequelize.INTEGER
      }
    
      
    },
    
    {
      timestamps: false
  });
  
    return Score;
  };