module.exports = (sequelize, Sequelize) => {
    const Question= sequelize.define("question", {
      questions: {
        type: Sequelize.STRING
      },
      option1: {
        type: Sequelize.STRING
      },
      option2: {
        type: Sequelize.STRING
      },
      option3: {
        type: Sequelize.STRING
      },
      option4: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.STRING
      },
    
      quizid :{
        type:Sequelize.INTEGER,
        field: 'quizid',
        references:{
            model: 'quizes',
            key: 'id'
        }
    },
    
    typeid :{
        type:Sequelize.INTEGER,
        field: 'typeid',
        references:{
            model: 'types',
            key: 'id'
        }
        } 
    },
    {
      timestamps:false,
      underscored:true
    }
    );
  
    return Question;
  };