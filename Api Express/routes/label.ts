import { Router } from 'express'
import { getLabels } from '../controllers/label'

const router = Router()

router.get('/', getLabels)

export default router