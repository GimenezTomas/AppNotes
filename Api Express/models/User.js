"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var connection_1 = require("../db/connection");
var User = connection_1["default"].define('Users', {
    Userid: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports["default"] = User;
