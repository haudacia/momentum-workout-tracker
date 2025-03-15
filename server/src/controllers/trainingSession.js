import TrainingSession from '../models/TrainingSession.js';

const getAllTrainingSessions = async (req, res) => {
    try {
        const trainingSessions = await TrainingSession.find()
            .populate('exercises.exercise');
        res.status(200).json(trainingSessions);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const getTrainingSession = async (req, res) => {
    const { id } = req.params;

    try {
        const trainingSession = await TrainingSession.findById(id)
            .populate('exercises.exercise');
        res.status(200).json(trainingSession);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const createTrainingSession = async (req, res) => {
    console.log(req.body);
    const trainingSession = req.body;

    const newTrainingSession = new TrainingSession(trainingSession);

    try {
        await newTrainingSession.save();
        res.status(201).json(newTrainingSession);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

const updateTrainingSession = async (req, res) => {
    const { id } = req.params;
    const trainingSession = req.body;

    try {
        const updatedTrainingSession = await TrainingSession.findByIdAndUpdate(
            id,
            trainingSession,
            { new: true }
        ).populate('exercises.exercise', 'name muscleGroup');
        res.status(200).json(updatedTrainingSession);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

const deleteTrainingSession = async (req, res) => {
    const { id } = req.params;

    try {
        await TrainingSession.findByIdAndDelete(id);
        res.status(200).json({ message: 'Training plan deleted successfully' });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

export {
    getAllTrainingSessions,
    getTrainingSession,
    createTrainingSession,
    updateTrainingSession,
    deleteTrainingSession,
};
