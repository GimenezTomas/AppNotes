"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var connection_1 = require("../db/connection");
var Label = connection_1["default"].define('Labels', {
    Labelid: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports["default"] = Label;
