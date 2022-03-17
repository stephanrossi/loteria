import { Router } from "express";
import * as LoteriaController from '../controllers/loteriaController'
import * as testeController from '../controllers/testeController'

const router = Router()

router.get('/', (req, res) => {
    res.render('pages/index')
})

router.get('/mega', LoteriaController.mega)

router.post('/megateste', testeController.getMega)

export default router