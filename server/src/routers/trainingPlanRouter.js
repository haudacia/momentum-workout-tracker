import { Router } from 'express';
import * as controller from '../controllers/trainingPlan.js';

const router = Router();

router.get('/', controller.getAllTrainingPlans);
router.get('/:id', controller.getTrainingPlan);
router.post('/', controller.createTrainingPlan);
router.patch('/:id', controller.updateTrainingPlan);
router.delete('/:id', controller.deleteTrainingPlan);

export default router;