import entities from "app/entities";
import {database} from "app/constants";

const db = entities[database.tables.hotels.code];

export default {
  db
};
