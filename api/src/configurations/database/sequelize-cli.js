import dotenv from "dotenv";
import sequelize from "./sequelize";
import {application} from "app/constants";

dotenv.config();

const env = application.current_environment || application.environments.development;

let config = {
  "username": process.env.DATABASE_USERNAME,
  "password": process.env.DATABASE_PASSWORD,
  "database": process.env.DATABASE_NAME,
  "host": process.env.DATABASE_HOST,
  "port": process.env.DATABASE_PORT,
  "dialect": "mysql",
  "operatorsAliases": sequelize.Op,
  "define": {
    "paranoid": false,
    "timestamps": true,
    "underscored": true
  }
};

if (application.current_environment === application.environments.testing) {
  config = {
    "username": process.env.TEST_DATABASE_USERNAME,
    "password": process.env.TEST_DATABASE_PASSWORD,
    "database": process.env.TEST_DATABASE_NAME,
    "host": process.env.TEST_DATABASE_HOST,
    "port": process.env.TEST_DATABASE_PORT,
    "dialect": "mysql",
    "operatorsAliases": sequelize.Op,
    "define": {
      "paranoid": false,
      "timestamps": true,
      "underscored": true
    }
  };

}

const sequelizeCliConfig = {
  [env]: config
};

module.exports = sequelizeCliConfig;
