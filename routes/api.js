const router = require("express").Router();
const Workout = require("../models/workout.js");

// initial workout post
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dataWorkout => {
      res.json(dataWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// routes for id for workouts
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then(dataWorkout => {
      res.json(dataWorkout);
    })

    .catch(err => {
      res.json(err);
    });

});

// routes for workouts
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(dataWorkouts => {
      res.json(dataWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

//finds the range of all of the workouts limits to 5
router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(5)
    .then(dataWorkouts => {
      console.log(dataWorkouts)
      res.json(dataWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/api/workouts", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
