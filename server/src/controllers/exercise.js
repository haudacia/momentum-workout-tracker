import Exercise from "../models/Exercise.js";

const getAllExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.status(200).json(exercises);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const getExercise = async (req, res) => {
    const { id } = req.params;

    try {
        const exercise = await Exercise.findById(id);
        res.status(200).json(exercise);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const createExercise = async (req, res) => {
    const exercise = req.body;

    const newExercise = new Exercise(exercise);

    try {
        await newExercise.save();
        res.status(201).json(newExercise);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

const updateExercise = async (req, res) => {
    const { id } = req.params;
    const exercise = req.body;

    try {
        const updatedExercise = await Exercise.findByIdAndUpdate
            (id
                , exercise
                , { new: true }
            );
        res.status(200).json(updatedExercise);
    }
    catch (err) {
        res.status(409).json({ message: err.message });
    }
};

const deleteExercise = async (req, res) => {
    const { id } = req.params;

    try {
        await Exercise.findByIdAndDelete(id);
        res.status(200).json({ message: 'Exercise deleted successfully' });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

export {
    getAllExercises,
    getExercise,
    createExercise,
    updateExercise,
    deleteExercise,
};