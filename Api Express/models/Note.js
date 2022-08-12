"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var connection_1 = require("../db/connection");
var Note = connection_1["default"].define('Notes', {
    Notesid: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING
    },
    content: {
        type: sequelize_1.DataTypes.STRING
    },
    time: {
        type: sequelize_1.DataTypes.STRING
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    },
    priority: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0
    },
    userid: {
        type: sequelize_1.DataTypes.INTEGER
    },
    labelid: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports["default"] = Note;
