import { Router } from "express";
import trainingPlanRouter from "./trainingPlanRouter.js";
import exerciseRouter from "./exerciseRouter.js";

const router = Router();

router.use('/training-plan', trainingPlanRouter);
router.use('/exercise', exerciseRouter);

export default router;