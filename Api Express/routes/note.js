"use strict";
exports.__esModule = true;
var express_1 = require("express");
//const { getNotes,/* getNotesByFilter, postAddNote, putEditNote, deleteNote */ } = require('../controllers/note')
var note_1 = require("../controllers/note");
var router = (0, express_1.Router)();
router.get('/', note_1.getNotes);
router.get('/:type/:min/:max', note_1.getNotesByFilter);
router.post('/', note_1.postAddNote);
router.put('/:Notesid', note_1.putEditNote);
router["delete"]('/:Notesid', note_1.deleteNote);
exports["default"] = router;
