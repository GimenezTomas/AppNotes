import { Router } from 'express'
//const { getNotes,/* getNotesByFilter, postAddNote, putEditNote, deleteNote */ } = require('../controllers/note')
import { postAddUser, postUsersByFilter } from '../controllers/user'

const router = Router()

router.post( '/get', postUsersByFilter )
router.post( '/add', postAddUser )

export default router