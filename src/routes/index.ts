import { Router } from "express";
import * as MegaController from '../controllers/megaController'
import * as testeController from '../controllers/testeController'

const router = Router()

router.get('/', (req, res) => {
    res.render('pages/index')
})

router.get('/mega', MegaController.all)
router.get('/mega/:lottery/:drawing', MegaController.byDrawing)

export default router