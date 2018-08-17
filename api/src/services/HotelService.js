import HotelRepository from "app/repositories/HotelRepository";
import HotelAmenitiesRepository from "app/repositories/HotelAmenitiesRepository";
import NotFound from "app/exceptions/NotFound";

export async function getHotel(id) {
  let hotel = await HotelRepository.db.find({
    where: {id: id}
  });
  hotel = hotel.toJSON();
  if (!hotel) throw new NotFound("User not found", "USER_NOT_FOUND");
  hotel.amenities = await HotelAmenitiesRepository.getHotelWithAmenities(hotel.id);

  return hotel;
}

export async function geAlltHotel(page = 1, limit = 50, offset = 0) {
  let data = await HotelRepository.db.findAndCountAll()
    .then(async (data) => {
      let pages = Math.ceil(data.count / limit);
      offset = limit * (page - 1);
      let hotels = await HotelRepository.db.findAll({
        limit: limit,
        offset: offset,
        $sort: {id: 1}
      });

      return {"result": hotels, "count": data.count, "pages": pages};
    });

  if (data.count && data.count < 1) throw new NotFound("Users not found", "USERS_NOT_FOUND");
  await addAmenities(data.result);
  return data;
}

async function addAmenities(hotels) {
  for (let key in hotels) {
    if (hotels.hasOwnProperty(key)) {
      hotels[key] = hotels[key].toJSON();
      hotels[key].amenities = await HotelAmenitiesRepository.getHotelWithAmenities(hotels[key].id) || [];
    }
  }
  return hotels;
}
