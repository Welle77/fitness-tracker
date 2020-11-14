const mongoose = require("mongoose");
const { userSchema, workoutProgramSchema } = require("../models/schemas");
const User = mongoose.model("User", userSchema);
const Workout = mongoose.model("Workout", workoutProgramSchema);

// module.exports.addWorkout = function (req, res) {
//   res.render("add_workout", {
//     title: "Add Workout",
//   });
// };

module.exports.createWorkout = function (req, res) {
  const { user: userID } = req.session.passport;
  User.findById(userID, (err, user) => {
    if (err) console.log(err);
    const workout = new Workout();
    workout.name = req.body.workout_field;
    workout.exercises = [];
    user.workouts.push(workout);
    user.save();
    res.redirect("/workouts");
  });
};

module.exports.getWorkoutList = function (req, res) {
  const { user: userID } = req.session.passport;
  User.findById(userID, (err, user) => {
    console.log(user);
    if (err) console.log(err);
    res.render("workouts", { workouts: user.workouts });
  });
};

module.exports.getWorkout = function (req, res) {
  const { id: workoutID } = req.params;
  const { user: userID } = req.session.passport;

  User.findById(userID, (err, user) => {
    const workout = user.workouts.id(workoutID);
    if (workout.exercises)
      res.render("workout", {
        exercises: workout.exercises,
        title: workout.name,
      });
    else res.render("add_exercise");
  });
};
