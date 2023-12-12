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
    size: {
      type: String,
      default: "wide"
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

const getPlantsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
})

const User = mongoose.model("plants", plantsSchema)

const getPlants = mongoose.model("getPlants", getPlantsSchema)



// app.post("/add" , async (req, res) => {
//     // const { name,category,commonname,desc,size,space,sunlight,temperature,watering  } = req.body;
//     const {name} = req.query;

//     res.json({name});
//     // const existingDoc = await User.findOne({name: { $regex: new RegExp(name, 'i')  }});

//     // if(existingDoc){
//     //   // const newUser = await User({ name, category,commonname,desc,size,space,sunlight,temperature,watering,date})
//     //   // await newUser.save();
//     //   res.status(400).json(existingDoc);
//     // }
//     // else{
//     //   res.status(200).json("Plant added Successfully")
//     // }
// });

app.post("/add", async (req, res) => {

  const { name,category,commonname,desc,size,space,sunlight,temperature,watering  } = req.body;
  const {date} = plantsSchema
  const plantDoc = await User.findOne({name: { $regex: new RegExp(name, 'i')  }});

  if (plantDoc) {
      return res.status(400).json("Plant exist");
  }
  else{
    try {
      const newUser = await User({ name, category,commonname,desc,size,space,sunlight,temperature,watering,date})
      await newUser.save();
      res.status(200).json("Plant Added");

    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
});

app.get("/getPlants", async(req,res) => {
  const {name} = req.query;
  // res.json({name: `${name}`})
  // const plantDoc = await User.findOne({name});

  const plantDoc = await User.findOne({name: { $regex: new RegExp(name, 'i')  }});
  
  if (plantDoc){
    console.log(plantDoc)
    res.status(200).json(plantDoc);
  }else{
    res.status(400).json("Not found");
  }

})



