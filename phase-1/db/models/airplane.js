'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    airlineCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 2],
        isAlpha: true,
        isUppercase: true
      }
    },
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [1, 4]
      }
    },
    inService: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
      validate: {
        isInService(value) {
          if (value === false &&
            this.currentNumPassengers !== undefined &&
            this.currentNumPassengers !== null
          ) {
            throw new Error(
              'Flight must be inService if there are passengers currently on the plane.')
          }
        }
      }
    },
    maxNumPassengers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 2,
        max: 853
      }
    },
    currentNumPassengers: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 0,
        max: 854,
        isNotGreaterThanMNP(value) {
          if (value > this.maxNumPassengers) {
            throw new Error('Plane would be over capacity. Current passengers must be less than max');
          }
        }
      }
    },
    firstFlightDate: {
      type: DataTypes.DATE,
      validate: {
        isAfter: '2019-12-31',
        isBefore: '2022-01-01'
      }
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};
