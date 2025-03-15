import { Router } from 'express';
import * as controller from '../controllers/exercise.js';

const router = Router();

router.get('/', controller.getAllExercises);
router.get('/:id', controller.getExercise);
router.post('/', controller.createExercise);
router.patch('/:id', controller.updateExercise);
router.delete('/:id', controller.deleteExercise);

export default router;