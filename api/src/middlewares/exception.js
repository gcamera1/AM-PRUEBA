import httpStatus from "http-status";
import {application} from "app/constants";

export default function (error, request, response, next) {
  if (application.current_environment !== application.environments.testing) console.error(error);
  if (application.current_environment !== application.environments.testing) delete error.stack;

  const errorString = (error && error.statusCode) ? error : "Oops internal error";
  response.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json(errorString);
  next();
}
