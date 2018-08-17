import ApiResponseHelper from "app/helpers/ApiResponseHelper";
import {getHotel, geAlltHotel} from "app/services/HotelService";

export async function get(request, response) {
  let data = await getHotel(request.params.id);
  return ApiResponseHelper.responseOk(response, data);
}

export async function getAll(request, response) {
  const {page, limit, offset} = request.query;
  let data = await geAlltHotel(page, limit, offset);
  return ApiResponseHelper.responseOk(response, data);
}
