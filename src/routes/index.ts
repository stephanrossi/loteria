import { Router } from "express";
import * as LoteriaController from '../controllers/loteriaController'

const router = Router()

router.get('/', (req, res) => {
    res.render('pages/index')
})

router.get('/mega', LoteriaController.mega)

export default router