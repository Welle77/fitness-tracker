const {
  workoutProgramSchema,
  userSchema,
  exerciseSchema,
} = require("../models/schemas");
const mongoose = require("mongoose");
const User = mongoose.model("User", userSchema);
const Workout = mongoose.model("Workout", workoutProgramSchema);
const Exercise = mongoose.model("Exercise", exerciseSchema);

// module.exports.addExercise = function (req, res) {
//   const { user: userID } = req.session.passport;
//   User.findById(userID, (err, user) =>
//     res.render("add_exercise", {
//       title: "Add Exercise to Workout",
//       workouts: user.workouts,
//     })
//   );
// };

module.exports.createExercise = function (req, res) {
  const { user: userID } = req.session.passport;
  console.log("UserID: " + userID);
  User.findById(userID, (err, user) => {
    if (err) console.log(err);
    const workoutID = req.body.Workout;
    let exercise = new Exercise();
    exercise.name = req.body.Exercise;
    exercise.description = req.body.Description;
    exercise.sets = req.body.Set;
    exercise.reps = req.body.Reps;
    exercise.time = req.body.Time;
    const workout = user.workouts.id(workoutID);
    workout.exercises.push(exercise);
    user.save();
    res.redirect("/workouts/" + req.body.Workout);
  });
};
