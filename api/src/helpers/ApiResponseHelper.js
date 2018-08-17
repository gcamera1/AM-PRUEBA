import httpStatus from "http-status";

class ApiResponseHelper {
  responseTemplate(responseHttp, response, status) {
    return responseHttp.status(status).json(response);
  }

  responseOk(responseHttp, response) {
    return this.responseTemplate(responseHttp, response, httpStatus.OK);
  }

  responseCreate(responseHttp, response) {
    return this.responseTemplate(responseHttp, response, httpStatus.CREATED);
  }

  responseNotFound(responseHttp, response) {
    return this.responseTemplate(responseHttp, response, httpStatus.NOT_FOUND);
  }
}

export default new ApiResponseHelper();
