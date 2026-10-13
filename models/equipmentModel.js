
import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

const Equipment = sequelize.define("Equipment", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    category: {
        type: DataTypes.STRING,
        allowNull: false
    },

    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    condition: {
        type: DataTypes.STRING,
        allowNull: false
    },

    location: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "equipment",
    timestamps: false
});

export default Equipment;
