'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RubroGeneral extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.ArticuloManufacturado)
    }
  }
  RubroGeneral.init({
    denominacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RubroGeneral',
  });
  return RubroGeneral;
};