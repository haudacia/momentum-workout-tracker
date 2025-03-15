import { model, Schema } from "mongoose";

const ExerciseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    sets: {
        type: Number,
        required: true,
        default: 1,
    },
    reps: {
        type: Number
    },
    weight: {
        type: Number
    },
    usesMachine: {
        type: Boolean
    },
});

const Exercise = model('Exercise', ExerciseSchema);

export default Exercise;