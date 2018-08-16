import {database} from "app/constants/index";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(database.tables.hotels.code, {
    name: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    image: DataTypes.TEXT,
  }, {
    tableName: database.tables.hotels.name,
    timestamps: false,
    underscored: true
  });
};
