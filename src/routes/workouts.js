var express = require("express");
var router = express.Router();

const workoutCtrl = require("../controllers/workoutController");
const exerciseCtrl = require("../controllers/exerciseController");

/* GET home page. */

router.get("/workouts/add", ensureAuthenticated, workoutCtrl.addWorkout);
router.get("/workouts/:id", ensureAuthenticated, workoutCtrl.getWorkout);
router.get("/workouts", ensureAuthenticated, workoutCtrl.getWorkoutList);
router.post("/workouts/create", ensureAuthenticated, workoutCtrl.createWorkout);
router.get("/workouts/exercises/add",ensureAuthenticated,exerciseCtrl.addExercise
);
// router.get('/exercise/', ensureAuthenticated, workOutCtrl.getExercise)
router.post(
  "/exercises/create",
  ensureAuthenticated,
  exerciseCtrl.createExercise
);
//router.get('/:id', ensureAuthenticated, programController.getProgramDetails);
// router.get('/exercise/listAll', ensureAuthenticated, workOutCtrl.getExercisesList)

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash("danger", "Please login");
    res.redirect("/");
  }
}

module.exports = router;
