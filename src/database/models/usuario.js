'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {}
    }

    Usuario.init({
        usuario: DataTypes.STRING,
        clave: DataTypes.STRING,
        rol: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Usuario',
    });
    return Usuario;
}