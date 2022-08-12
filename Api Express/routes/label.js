"use strict";
exports.__esModule = true;
var express_1 = require("express");
var label_1 = require("../controllers/label");
var router = (0, express_1.Router)();
router.get('/', label_1.getLabels);
exports["default"] = router;
