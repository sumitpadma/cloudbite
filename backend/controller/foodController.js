import { log } from "console";
import foodModel from "../models/foodModel.js";

import fs from "fs";

//add food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    image: image_filename,
    category: req.body.category,
    price: req.body.price,
    description: req.body.description,
  });

  try {
    await food.save();
    res.json({ success: true, meassage: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, meassage: "Error" });
  }
};

//all food list

const listFood = async (req, res) => {
  try {
    const foodList = await foodModel.find({});
    res.json({ success: true, data: foodList });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//remove from food
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log("Error");
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood };
