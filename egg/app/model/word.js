module.exports = app => {
  const { Sequelize } = app;

  const Word = app.model.define('Word', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    word: Sequelize.STRING,
    translate: Sequelize.STRING,
    wordSet: Sequelize.STRING,
  });

  return Word;
};
