module.exports = app => {
  const { Sequelize } = app;

  const User = app.model.define('User', {
    username: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    password: Sequelize.STRING,
    email: Sequelize.STRING,
  });

  User.findUser = async (username, password) => {
    return await User.findOne({
      where: {
        username,
        password,
      }
    })
  }

  User.new = async (username, password, email) => {
    return User.create({
      username,
      password,
      email,
    })
  }

  return User;
};
