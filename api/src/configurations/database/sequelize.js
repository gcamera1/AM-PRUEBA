import sequelize from "sequelize";
import {application} from "app/constants";

let config = {
  "host": process.env.DATABASE_HOST,
  "dialect": "mysql",
  "port": process.env.DATABASE_PORT,
  "pool": {
    "max": 5,
    "min": 0,
    "acquire": 30000,
    "idle": 10000
  },
  "define": {
    "timestamps": true,
    "underscored": true
  },
  logging: console.log,
  "operatorsAliases": sequelize.Op
};

if (application.current_environment === application.environments.testing) {
  config = {
    "host": process.env.TEST_DATABASE_HOST,
    "dialect": "mysql",
    "port": process.env.TEST_DATABASE_PORT,
    "pool": {
      "max": 5,
      "min": 0,
      "acquire": 30000,
      "idle": 10000
    },
    "define": {
      "timestamps": true,
      "underscored": true
    },
    logging: false,
    "operatorsAliases": sequelize.Op
  };
}

export default config;
