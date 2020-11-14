var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: false,
  },
  time: {
    type: Number,
    required: false,
  },
});

const workoutProgramSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  exercises: [exerciseSchema],
});

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
  },
  workouts: [workoutProgramSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = { userSchema, exerciseSchema, workoutProgramSchema };
