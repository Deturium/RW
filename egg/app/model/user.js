module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const User = app.model.define('User', {
    username: STRING,
    password: STRING,
  });

  User.findByLogin = function* (username) {
    return yield this.findOne({
      where: {
        username
      }
    });
  }

  return User;
};
