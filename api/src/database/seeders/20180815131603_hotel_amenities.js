import {database} from "app/constants";
import data from "./data";
import amenitiesData from "./amenities";

const tableName = database.tables.hotel_amenities.name;

async function getData() {
  let hotelAmenities = [];

  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      const hotel = data[key];
      const amenity = await generateAmenityByHotelId(hotel.id, hotel.amenities);
      hotelAmenities = await hotelAmenities.concat(amenity);
    }
  }

  return hotelAmenities;
}

async function generateAmenityByHotelId(hotelId, amenities) {
  let hotelAmenities = [];

  for (let key in amenities) {
    if (amenities.hasOwnProperty(key)) {
      const amenity = amenities[key];

      const amenityId = await getAmenityByName(amenity);
      hotelAmenities.push({
        hotel_id: Number(hotelId),
        amenity_id: amenityId
      });
    }
  }

  return hotelAmenities;
}

async function getAmenityByName(name) {
  let amenityId = null;

  for (let key in amenitiesData) {
    if (amenitiesData.hasOwnProperty(key) && amenitiesData[key].name === name) {
      amenityId = amenitiesData[key].id;
    }
  }

  return amenityId;
}


module.exports = {
  up: async (queryInterface) => {
    const amenities = await getData();
    return queryInterface.bulkInsert(tableName, amenities, {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete(tableName, null, {});
  }
};
