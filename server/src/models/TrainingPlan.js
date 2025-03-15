import { model, Schema } from 'mongoose';

const TrainingPlanSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    exercises: [
        // {
        //     type: Schema.Types.ObjectId,
        //     ref: 'Exercise',
        // },
        {
            exerciseName: {
                type: String
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            weight: {
                type: Number
            },
        }
    ]
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    // },
});

const TrainingPlan = model('TrainingPlan', TrainingPlanSchema);

export default TrainingPlan;