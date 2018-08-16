import {application} from "app/constants";

let config = {
  "username": process.env.DATABASE_USERNAME,
  "password": process.env.DATABASE_PASSWORD,
  "database": process.env.DATABASE_NAME
};

if (application.current_environment === application.environments.testing) {
  config = {
    "username": process.env.TEST_DATABASE_USERNAME,
    "password": process.env.TEST_DATABASE_PASSWORD,
    "database": process.env.TEST_DATABASE_NAME
  };
}

export default config;
