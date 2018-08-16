import {database} from "app/constants";
import data from "./data";

const tableName = database.tables.hotels.name;

async function getData() {
  let hotels = [];

  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      const hotel = data[key];
      hotels.push({
        id: hotel.id,
        name: hotel.name,
        stars: hotel.stars,
        price: hotel.price,
        image: hotel.image
      });
    }
  }

  return hotels;
}

module.exports = {
  up: async (queryInterface) => {
    const hotelData = await getData();
    return queryInterface.bulkInsert(tableName, hotelData, {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete(tableName, null, {});
  }
};
