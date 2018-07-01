module.exports = app => {
  const { Sequelize } = app;

  const Book = app.model.define('Book', {
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

  Book.list = async (username) => {
    return await Book.findAll({
      where: {
        username,
      },
      attributes: ['id'],
    });
  }

  Book.new = async (username, id) => {
    return await Book.create({
      username,
      id
    });
  }

  Book.del = async (username, id) => {
    return await Book.destroy({
      where: {
        username,
        id,
      }
    });
  }

  return Book;
};
