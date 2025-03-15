import { Router } from 'express';
import {
    getAllExercises,
    getExercise,
    createExercise,
    updateExercise,
    deleteExercise
} from '../controllers/exercise.js';

const router = Router();

router.get('/', getAllExercises);
router.get('/:id', getExercise);
router.post('/', createExercise);
router.patch('/:id', updateExercise);
router.delete('/:id', deleteExercise);

export default router;