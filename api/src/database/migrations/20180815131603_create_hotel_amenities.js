import {database} from "app/constants";

const tableName = database.tables.hotel_amenities.name;
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hotel_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      amenity_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE
      }
    }).then(function () {
      return queryInterface.addConstraint(tableName, ["hotel_id"], {
        type: "foreign key",
        name: `${tableName}_fkey_constraint_hotel_id`,
        references: {
          table: database.tables.hotels.name,
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      });
    }).then(function () {
      return queryInterface.addConstraint(tableName, ["amenity_id"], {
        type: "foreign key",
        name: `${tableName}_fkey_constraint_amenity_id`,
        references: {
          table: database.tables.amenities.name,
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      });
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable(tableName);
  }
};
