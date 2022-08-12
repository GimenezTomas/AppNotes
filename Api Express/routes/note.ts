import { Router } from 'express'
//const { getNotes,/* getNotesByFilter, postAddNote, putEditNote, deleteNote */ } = require('../controllers/note')
import { getNotes, postAddNote, putEditNote, deleteNote, getNotesByFilter } from '../controllers/note'

const router = Router()

router.get( '/', getNotes )
router.get( '/:type/:min/:max', getNotesByFilter )
router.post( '/', postAddNote )
router.put( '/:Notesid', putEditNote )
router.delete( '/:Notesid', deleteNote )


export default router