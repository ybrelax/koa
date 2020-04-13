import config from "./config";
import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize(
  config.databaseName,
  config.userName,
  config.password,
  {
    host: config.host,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("mysql has been connected");
  })
  .catch((err) => {
    console.log("connnect failed");
  });

export default sequelize;
