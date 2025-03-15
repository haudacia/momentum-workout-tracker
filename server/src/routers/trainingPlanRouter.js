import { Router } from 'express';
import {
    getAllTrainingPlans,
    getTrainingPlan,
    createTrainingPlan,
    updateTrainingPlan,
    deleteTrainingPlan
} from '../controllers/trainingPlan.js';

const router = Router();

router.get('/', getAllTrainingPlans);
router.get('/:id', getTrainingPlan);
router.post('/', createTrainingPlan);
router.patch('/:id', updateTrainingPlan);
router.delete('/:id', deleteTrainingPlan);

export default router;