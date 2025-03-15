import { model, Schema } from 'mongoose';

const TrainingPlanSchema = new Schema({
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    // },
    name: {
        type: String,
        required: true,
    },
    sessions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'TrainingSession',
        },
    ],
});

const TrainingPlan = model('TrainingPlan', TrainingPlanSchema);

export default TrainingPlan;