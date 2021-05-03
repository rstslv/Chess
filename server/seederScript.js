const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './process.env') });

const productsData = require("./data/products");
const Product = require("./models/Product");
const connectDB = require("./config/db");

connectDB();

const ImportData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log("Data Import Success ");
    process.exit();
  } catch (error) {
    console.error("Error with data import");
    process.exit(1);
  }
};
ImportData();
