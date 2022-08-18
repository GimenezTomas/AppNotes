"use strict";
exports.__esModule = true;
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var field_validation_1 = require("../middlewares/field-validation");
var auth_1 = require("../controllers/auth");
var router = (0, express_1.Router)();
router.post('/login', [
    (0, express_validator_1.check)('email', 'email is required').isEmail(),
    (0, express_validator_1.check)('password', 'password is required').not().isEmpty(),
    field_validation_1.validateFields
], auth_1.login);
exports["default"] = router;
