const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Define the Book schema
const bookSchema = new Schema({
  name: String,
  price: Number,
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "User Model",
  },
});

// Create the models
const PurchasedBooksModel = mongoose.model("Purchased Book", bookSchema);

module.exports = {
    PurchasedBooksModel
}