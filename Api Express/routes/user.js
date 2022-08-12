"use strict";
exports.__esModule = true;
var express_1 = require("express");
//const { getNotes,/* getNotesByFilter, postAddNote, putEditNote, deleteNote */ } = require('../controllers/note')
var user_1 = require("../controllers/user");
var router = (0, express_1.Router)();
router.post('/get', user_1.postUsersByFilter);
router.post('/add', user_1.postAddUser);
exports["default"] = router;
