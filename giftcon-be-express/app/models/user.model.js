module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    nickname: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    oauthType: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    }
  });

  return User;
};
