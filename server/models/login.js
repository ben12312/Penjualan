'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword, verifyPassword } = require('../helper/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class Login extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Login.init({
    user: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Login',
  });

  Login.addHook('beforeCreate', (user, options) => {
    user = user.dataValues
    user.password = hashPassword(user.password)
  })
  return Login;
};