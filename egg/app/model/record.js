module.exports = app => {
  const { Sequelize } = app;

  const Record = app.model.define('Record', {
    id: {
      type: Sequelize.INTEGER,
      references: {
        model: app.model.word,
        key: 'id',
      },
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      references: {
        model: app.model.user,
        key: 'username',
      },
      primaryKey: true,
    },
  });

  Record.cnt = async (username) => {
    return await Record.count({
      where: {
        username,
      }
    });
  }

  Record.new = async (username, id) => {
    return await Record.create({
      username,
      id
    });
  }

  return Record;
};
