import {database} from "app/constants/index";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(database.tables.amenities.code, {
    name: DataTypes.STRING
  }, {
    tableName: database.tables.amenities.name,
    timestamps: false,
    underscored: true
  });
};
