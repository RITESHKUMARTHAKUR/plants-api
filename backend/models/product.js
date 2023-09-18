const mongoose = require("mongoose");

const plantsSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  plantname: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: [true, "price must be provided"],
  },
  commonname: {
    type: String,
    required: true,
    default: "Plant",
  },
  desc: {
    type: String,
    required: true,
  },
  space: {
    type: String,
    default: "wide"
  },
  sunlight: {
    type: String,
    default: "low"
  },
  temperature: {
    type: String,
    default: 20
  },
  watering: {
    type: String,
    default:"low"
  },
});


module.exports = mongoose.model("plants", plantsSchema)