const connectDB = require("./db/connect");
const Plants = require("./models/product");
require("dotenv").config();

const PlantsJson = require("./plants.json")

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        // await Plants.deleteMany();
        await Plants.create(PlantsJson);
        console.log("Success")
    }catch (error) {
        console.log(error);
    }
}

start();