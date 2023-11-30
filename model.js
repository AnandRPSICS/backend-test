const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    gender: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const UserModel = mongoose.model("User Model", userSchema);
module.exports = { UserModel };
