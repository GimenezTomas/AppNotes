"use strict";
exports.__esModule = true;
exports.validateFields = void 0;
var validationResult = require('express-validator').validationResult;
var validateFields = function (req, res, next) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
};
exports.validateFields = validateFields;
