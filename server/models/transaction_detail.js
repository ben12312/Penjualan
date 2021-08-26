'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction_Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transaction_Detail.init({
    document_number: DataTypes.STRING,
    product_code: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    unit: DataTypes.STRING,
    sub_total: DataTypes.INTEGER,
    currency: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaction_Detail',
  });
  return Transaction_Detail;
};