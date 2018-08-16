import httpStatus from "http-status";

module.exports = function notFound(message, errorCode) {
  Error.captureStackTrace(this, this.constructor);
  const statusCode = httpStatus.NOT_FOUND;

  this.name = httpStatus["404_NAME"];
  this.message = message || httpStatus["404_MESSAGE"];
  this.statusCode = statusCode;
  this.errorCode = errorCode || statusCode;
};
