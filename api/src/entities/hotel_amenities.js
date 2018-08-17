import database from "app/constants/database";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(database.tables.hotel_amenities.code, {
    hotel_id: DataTypes.INTEGER,
    amenity_id: DataTypes.INTEGER
  }, {
    tableName: database.tables.hotel_amenities.name,
    timestamps: false,
    underscored: true
  });
};
