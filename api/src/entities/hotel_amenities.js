import database from "app/constants/database";

module.exports = (sequelize, DataTypes) => {
  let amenities = sequelize.define(database.tables.amenities.code, {
    oauth_client_id: DataTypes.INTEGER,
    access_token: DataTypes.STRING,
    expires: DataTypes.DATE
  }, {
    tableName: database.tables.hotel_amenities.name,
    timestamps: false,
    underscored: true,
    classMethods: {
      associate: function (models) {
        amenities.belongsTo(models[database.tables.hotels.code], {
          foreignKey: "hotel_id"
        });

        amenities.belongsTo(models[database.tables.hotel_amenities.code], {
          foreignKey: "amenity_id"
        });
      }
    }
  });

  return amenities;
};
