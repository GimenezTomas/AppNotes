"use strict";
exports.__esModule = true;
require("dotenv/config");
var Server_1 = require("./models/Server");
//dotenv.config()
var server = new Server_1["default"]();
server.listen();
