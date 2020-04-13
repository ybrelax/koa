import Koa from "koa";
import router from "./router";
import middleware from "./middleware";
import config from "./config";
import { Sequelize, DataTypes  } from "sequelize";

const app = new Koa();

const sequelize = new Sequelize(
  config.databaseName,
  config.userName,
  config.password,
  {
    host: config.host,
    dialect: "mysql",
  }
);

sequelize.authenticate().then(() => {
    console.log('mysql has been connected')
}).catch( err => {
    console.log('connnect failed')
})


const customer = sequelize.define('customer', {
    id: {
        type: DataTypes.UUID,
        unique: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sex: {
        type: DataTypes.ENUM('男', '女'),
        allowNull: false
    },
    fullAddress: {
        type: DataTypes.STRING,
        get() {
            return `${this.getDateValue('address')}`
        }
    }
})

console.log('customer:', customer)



middleware(app);
router(app);

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
