const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((drones)=>res.render("drones/list", {drones}))
  .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body
  Drone.create({name, propellers, maxSpeed}).
  then(newDrone =>{
    console.log(newDrone)
    res.redirect("/drones")
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
  .then(drone=>{
    res.render("drones/update-form", drone)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id
  const {name, propellers, maxSpeed} = req.body
  Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed})
  .then(droneUpdate =>{
    console.log(droneUpdate)
    res.redirect("/drones")
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
