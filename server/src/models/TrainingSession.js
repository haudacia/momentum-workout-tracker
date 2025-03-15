import { model, Schema } from 'mongoose';

const TrainingSessionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        enum: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    },
    dayOfWeek: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5, 6]
    },
    exercises: [
        {
            exercise: { type: Schema.Types.ObjectId, ref: 'Exercise' },
            sets: { type: Number },
            reps: { type: Number },
            weight: { type: Number || undefined }
        }]
});

const TrainingSession = model('TrainingSession', TrainingSessionSchema);

export default TrainingSession;