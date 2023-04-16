const express = require('express')
const app = express();
const connectDB = require("./db/connect");
const env = require('dotenv').config();

const PORT = process.env.PORT || 5000;
const plants_routes = require("./routes/products");

app.get("/", (req,res) => {
    res.send("Hii, I'am live");
});

app.use("/api/plants", plants_routes);

app.get("/", (req,res) => {
    res.send("Hii, I'am live");
});



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