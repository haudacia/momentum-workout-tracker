import { Router } from "express";
import trainingPlanRouter from "./trainingPlanRouter.js";
import exerciseRouter from "./exerciseRouter.js";
import trainingSessionRouter from "./trainingSessionRouter.js";

const router = Router();

router.use('/training-plan', trainingPlanRouter);
router.use('/exercise', exerciseRouter);
router.use('/training-session', trainingSessionRouter);

export default router;