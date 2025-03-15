import { Router } from 'express';
import * as controller from '../controllers/trainingSession.js';

const router = Router();

router.get('/', controller.getAllTrainingSessions);
router.get('/:id', controller.getTrainingSession);
router.post('/', controller.createTrainingSession);
router.patch('/:id', controller.updateTrainingSession);
router.delete('/:id', controller.deleteTrainingSession);

export default router;