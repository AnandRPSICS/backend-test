const mongoose = require("mongoose");
async function connectDb() {
  await mongoose.connect(
    "mongodb+srv://anandrp2030:anandrp2030@cluster0.bqdyhfo.mongodb.net/"
  );
  console.log("Db Connected");
}
module.exports = { connectDb };
