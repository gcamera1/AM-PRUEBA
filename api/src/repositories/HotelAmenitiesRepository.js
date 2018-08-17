import entities from "app/entities";
import {database} from "app/constants";

const db = entities[database.tables.hotel_amenities.code];

async function getHotelWithAmenities(hotelId) {
  return await db.sequelize.query(`SELECT hotel_amenities.amenity_id, amenities.name from hotel_amenities
   INNER JOIN amenities ON amenities.id = hotel_amenities.amenity_id
   where hotel_amenities.hotel_id = ${hotelId};`).spread(function (res) {
    return res;
  });
}


export default {
  db,
  getHotelWithAmenities
};
