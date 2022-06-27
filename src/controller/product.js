const express = require("express");
const router = express.Router();
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");
const Product = require("../model/product");
console.log("path", path.dirname(__dirname));
router.get("", (req, res) => {
  res.status(201).send("product....");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("", upload.array("pictures"), async (req, res) => {
  const arr = [];
  req.files.map((e) => {
    arr.push(e.filename);
  });

  const prod = new Product({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    rating: req.body.rating,
    description: req.body.decription,
    pictures: arr,
  });
  const createdprod = await prod.save();
  return res
    .status(201)
    .send({ message: "created producr successfully", product: createdprod });
});
router.post("/getProduct", async (req, res) => {
  const prod = await Product.find();
  console.log("get", prod);
  if (prod) {
    return res
      .status(201)
      .send({ message: "get product successfully", product: prod });
  } else {
    return res.status(401).send({ message: "something wrong" });
  }
});
module.exports = router;
