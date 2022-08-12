"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteNote = exports.putEditNote = exports.postAddNote = exports.getNotesByFilter = exports.getNotes = void 0;
var Note_1 = require("../models/Note");
var express = require('express');
var _a = require("sequelize"), Sequelize = _a.Sequelize, Op = _a.Op;
var getNotes = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var notes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Note_1["default"].findAll({})];
            case 1:
                notes = _a.sent();
                res.json({
                    msg: 'getNotes',
                    notes: notes
                });
                return [2 /*return*/];
        }
    });
}); };
exports.getNotes = getNotes;
var getNotesByFilter = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, type, min, max, notes, _b;
    var _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = req.params, type = _a.type, min = _a.min, max = _a.max;
                console.log('-----------------------------------------------------------');
                console.log('-----------------------------------------------------------');
                console.log(type, min, max);
                console.log('-----------------------------------------------------------');
                console.log('-----------------------------------------------------------');
                _b = type;
                switch (_b) {
                    case 'time': return [3 /*break*/, 1];
                    case 'priority': return [3 /*break*/, 3];
                    case 'archived': return [3 /*break*/, 5];
                    case 'active': return [3 /*break*/, 7];
                    case 'user': return [3 /*break*/, 9];
                    case 'label': return [3 /*break*/, 11];
                }
                return [3 /*break*/, 13];
            case 1: return [4 /*yield*/, Note_1["default"].findAll({
                    where: {
                        priority: (_c = {},
                            _c[Op.between] = [min, max],
                            _c)
                    }
                })];
            case 2:
                notes = _m.sent();
                return [3 /*break*/, 13];
            case 3: return [4 /*yield*/, Note_1["default"].findAll({
                    where: {
                        priority: (_d = {},
                            _d[Op.between] = [min, max],
                            _d)
                    }
                })];
            case 4:
                notes = _m.sent();
                return [3 /*break*/, 13];
            case 5: return [4 /*yield*/, Note_1["default"].findAll({
                    where: {
                        status: (_e = {},
                            _e[Op.eq] = false,
                            _e),
                        userid: (_f = {},
                            _f[Op.eq] = min,
                            _f)
                    }
                })];
            case 6:
                notes = _m.sent();
                return [3 /*break*/, 13];
            case 7: return [4 /*yield*/, Note_1["default"].findAll({
                    where: {
                        status: (_g = {},
                            _g[Op.eq] = true,
                            _g),
                        userid: (_h = {},
                            _h[Op.eq] = min,
                            _h)
                    }
                })];
            case 8:
                notes = _m.sent();
                return [3 /*break*/, 13];
            case 9: return [4 /*yield*/, Note_1["default"].findAll({
                    where: {
                        userid: (_j = {},
                            _j[Op.eq] = min,
                            _j)
                    }
                })];
            case 10:
                notes = _m.sent();
                return [3 /*break*/, 13];
            case 11: return [4 /*yield*/, Note_1["default"].findAll({
                    where: {
                        labelid: (_k = {},
                            _k[Op.eq] = max,
                            _k),
                        userid: (_l = {},
                            _l[Op.eq] = min,
                            _l)
                    }
                })];
            case 12:
                notes = _m.sent();
                return [3 /*break*/, 13];
            case 13:
                res.json({
                    msg: 'getNotesByFilter',
                    notes: notes,
                    type: type
                });
                return [2 /*return*/];
        }
    });
}); };
exports.getNotesByFilter = getNotesByFilter;
var postAddNote = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, note, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                console.log(body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, Note_1["default"].build({
                        title: body.title,
                        content: body.content,
                        time: body.time,
                        status: true,
                        priority: 0,
                        userid: body.userid,
                        labelid: body.labelid
                    })];
            case 2:
                note = _a.sent();
                return [4 /*yield*/, note.save()];
            case 3:
                _a.sent();
                res.json(note);
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                res.status(500).json({
                    msg: 'Talk to support',
                    error: error_1
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.postAddNote = postAddNote;
var putEditNote = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Notesid, body, note, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                Notesid = req.params.Notesid;
                body = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, Note_1["default"].findByPk(Notesid)];
            case 2:
                note = _a.sent();
                if (!note) {
                    return [2 /*return*/, res.status(400).json({ msg: 'The note does not exists' })];
                }
                return [4 /*yield*/, note.update(body)
                    //await note.save()
                ];
            case 3:
                _a.sent();
                //await note.save()
                res.json({ note: note });
                return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                res.status(500).json({
                    msg: 'Talk to support',
                    error: error_2
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.putEditNote = putEditNote;
var deleteNote = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Notesid, note, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                Notesid = req.params.Notesid;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, Note_1["default"].findByPk(Notesid)];
            case 2:
                note = _a.sent();
                if (!note) {
                    return [2 /*return*/, res.status(400).json({ msg: 'No existe el user' })];
                }
                return [4 /*yield*/, note.destroy()];
            case 3:
                _a.sent();
                res.json({ note: note });
                return [3 /*break*/, 5];
            case 4:
                error_3 = _a.sent();
                res.status(500).json({
                    msg: 'Hable con el admin'
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.deleteNote = deleteNote;
