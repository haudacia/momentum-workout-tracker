import TrainingPlan from '../models/TrainingPlan.js';

const getAllTrainingPlans = async (req, res) => {
    try {
        const trainingPlans = await TrainingPlan.find();
        res.status(200).json(trainingPlans);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const getTrainingPlan = async (req, res) => {
    const { id } = req.params;

    try {
        const trainingPlan = await TrainingPlan.findById(id).populate('sessions');
        res.status(200).json(trainingPlan);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const createTrainingPlan = async (req, res) => {
    console.log(req.body);
    const trainingPlan = req.body;

    const newTrainingPlan = new TrainingPlan(trainingPlan);

    try {
        await newTrainingPlan.save();
        res.status(201).json(newTrainingPlan);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

const updateTrainingPlan = async (req, res) => {
    const { id } = req.params;
    const trainingPlan = req.body;

    try {
        const updatedTrainingPlan = await TrainingPlan.findByIdAndUpdate(
            id,
            trainingPlan,
            { new: true }
        );
        res.status(200).json(updatedTrainingPlan);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

const deleteTrainingPlan = async (req, res) => {
    const { id } = req.params;

    try {
        await TrainingPlan.findByIdAndDelete(id);
        res.status(200).json({ message: 'Training plan deleted successfully' });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

export {
    getAllTrainingPlans,
    getTrainingPlan,
    createTrainingPlan,
    updateTrainingPlan,
    deleteTrainingPlan,
};
