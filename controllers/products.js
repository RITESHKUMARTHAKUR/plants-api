const Plant = require("../models/product");


const getAllPlants = async (req, res) => {
    const { size, commonname  } = req.query;
    const queryObject = {};

    if (size) {
        queryObject.size = { $regex: size, $options: "i" };
    }
    if (commonname) {
        queryObject.commonname = { $regex: commonname, $options: "i" };
    }

    const plants = await Plant.find(queryObject)
    res.status(200).json({plants});
};


const getAllPlantsTesting = async (req, res) => {
    const plants = await Plant.find(req.query)
    res.status(200).json({plants});
};

module.exports = { getAllPlants , getAllPlantsTesting};

