"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var db = new sequelize_1.Sequelize('app_notes', 'root', process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});
exports["default"] = db;
