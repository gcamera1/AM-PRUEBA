import {database} from "app/constants";
import amenities from "./amenities";

const tableName = database.tables.amenities.name;

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(tableName, amenities, {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete(tableName, null, {});
  }
};
