// Iteration #1
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];  

const mongoose = require("mongoose");
const Drone = require('../models/Drone.model')

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const fillDatabase = async () => {
   try {
       console.log("connecting database hola");
       await mongoose
       .connect(MONGO_URI, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useFindAndModify: false,
           useCreateIndex: true
         })
       console.log("connected database");
         
       const createdDrones = await Drone.create(drones)
       console.log(createdDrones)
     
   }
   catch (err) {
       console.error("Error connecting to mongo: ", err);
   }
   console.log("Disconnecting database...");
   mongoose.disconnect(); 
}
fillDatabase()