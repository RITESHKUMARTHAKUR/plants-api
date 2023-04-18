const Plant = require("../models/product");


const getAllPlants = async (req, res) => {
    const { name, size, commonname,category,space,sunlight,temperature,watering  } = req.query;
    const queryObject = {};
    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }

    if (size) {
        queryObject.size = { $regex: size, $options: "i" };
    }
    if (commonname) {
        queryObject.commonname = { $regex: commonname, $options: "i" };
    }
    if (category) {
        queryObject.category = { $regex: category, $options: "i" };
    }
    if (space) {
        queryObject.space = { $regex: space, $options: "i" };
    }
    if (sunlight) {
        queryObject.sunlight = { $regex: sunlight, $options: "i" };
    }
    if (temperature) {
        queryObject.temperature = { $regex: temperature, $options: "i" };
    }
    if (watering) {
        queryObject.watering = { $regex: watering, $options: "i" };
    }

    const plants = await Plant.find(queryObject)
    res.status(200).json({plants});
};


const getAllPlantsTesting = async (req, res) => {
    const plants = await Plant.find(req.query)
    res.status(200).json({plants});
};

module.exports = { getAllPlants , getAllPlantsTesting};

