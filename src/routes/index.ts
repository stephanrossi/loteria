import { Router } from "express";
import * as LoteriaController from '../controllers/loteriaController'

const router = Router()

router.get('/', (req, res) => {
    res.send('Home')
})

router.get('/mega', LoteriaController.mega)

export default router