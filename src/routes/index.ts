import { Router } from "express";
import * as MegaController from '../controllers/megaController'

const router = Router()

router.get('/', (req, res) => {
    res.render('pages/index')
})

router.get('/mega-sena', MegaController.latest)
router.get('/mega-sena/concurso', MegaController.byDrawing)

export default router