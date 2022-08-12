"use strict";
exports.__esModule = true;
//import * as dotenv from 'dotenv'
var Server_1 = require("./models/Server");
//dotenv.config()
var server = new Server_1["default"]();
server.listen();
