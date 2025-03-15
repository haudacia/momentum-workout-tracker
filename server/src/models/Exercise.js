import { model, Schema } from "mongoose";

const ExerciseSchema = new Schema({
    name: { type: String, required: true },
    muscleGroup: String,
    usesMachine: Boolean,
});

const Exercise = model('Exercise', ExerciseSchema);

export default Exercise;