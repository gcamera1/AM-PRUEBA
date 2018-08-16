import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import {sequelizeConfig, conexion} from "app/configurations";

const basename = path.basename(__filename),
  sequelize = new Sequelize(conexion.database, conexion.username, conexion.password, sequelizeConfig),
  db = {},
  modelsPath = __dirname;

fs
  .readdirSync(modelsPath)
  .filter(file => (file.indexOf("./") !== 0) && (file !== basename) && (file.slice(-3) === ".js"))
  .forEach(file => {
    const model = sequelize["import"](path.join(modelsPath, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
