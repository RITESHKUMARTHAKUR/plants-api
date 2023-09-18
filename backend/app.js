const express = require('express')
const app = express();
const connectDB = require("./db/connect");
const env = require('dotenv').config();
const mongoose = require('mongoose')
const cors = require("cors")

const PORT = process.env.PORT || 5000;
// const plants_routes = require("./routes/products");


app.use(cors());
app.use(express.json());
// app.use("/api/plants", plants_routes);


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I'am connected.`);
        })
    }catch (error) {
        console.log(error);
    }
}
start();

app.get("/", (req,res) => {
    res.send("Hii, I'am live");
});

const plantsSchema = new mongoose.Schema({
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
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
});

const User = mongoose.model("plants", plantsSchema)



app.post("/add" , async (req, res) => {
    const { plantname,  category   ,commonname,desc,space,sunlight,temperature,watering  } = req.body;
    
    const newUser = await User({ plantname, category,commonname,desc,space,sunlight,temperature,watering})
    console.log(newUser)
    await newUser.save();
});



