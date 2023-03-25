const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router();

router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json("Item added successfully.");
  } catch (error) {
    res.status(400).json(error);
  }
});
// router.post("/get-all", async (req, res) => {
//   try {
//     const newCategory = await Category.find()
//     res.send(newCategory)
//     res.status(200).json("Item added successfully.");
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });
module.exports = router;