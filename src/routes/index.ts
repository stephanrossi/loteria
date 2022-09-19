import { Router } from "express";
import * as LotteryController from '../controllers/loteryController'

const router = Router()

router.get('/loteria', LotteryController.getLottteryDataByDrawing)
router.get('/teste', LotteryController.saveLotteryInfo)

export default router
