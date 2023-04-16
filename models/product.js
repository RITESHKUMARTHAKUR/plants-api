const mongoose = require("mongoose");

const plantsSchema = new mongoose.Schema({
  name: {
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
  email: {
    type: String,
  },

  size: {
    type: String
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


module.exports = mongoose.model("Plant", plantsSchema)