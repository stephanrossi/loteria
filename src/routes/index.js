import { Router } from "express";
import * as MegaController from '../controllers/megaController.js'

const router = Router()

router.get('/', (req, res) => {
    res.render('pages/index')
})

router.get('/mega-sena', MegaController.getLatest)
router.post('/mega-sena', MegaController.postBet)
router.get('/mega-sena/concurso/', MegaController.getByDrawing)

export default router