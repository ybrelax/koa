import {DataTypes } from "sequelize";
import sequelize from "../dbConnect";
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

export default customer;