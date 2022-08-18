import { Router } from 'express'
import { check } from 'express-validator' 

import { validateFields } from '../middlewares/field-validation'
import { login } from '../controllers/auth'

const router = Router()

router.post('/login', [
    check('email', 'email is required').isEmail(),
    check('password', 'password is required').not().isEmpty(),
    validateFields
],login)

export default router