const express = require("express");
const mongoose = require("mongoose");
const { UserModel } = require("./model.js");
const { connectDb } = require("./connectDb.js");
const { userRouter } = require("./routes.js");
const { tweetRouter } = require("./tweetRouters.js");
const cors = require("cors");
const { bookRouter } = require("./book/bookRouter.js");

const app = express();
app.use(express.json());

app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json("Hello World");
});

app.use("/user", userRouter);
// app.use('/book', bookRouter);
app.use("/admin", tweetRouter);
app.use("/book", bookRouter);

app.post("/user/signup", async (req, res) => {
  try {
    const { name, email, password, phoneNumber, role, gender } = req.body;
    if (!name || !email || !password || !phoneNumber || !role || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = await new UserModel({
      name,
      email,
      password,
      phoneNumber,
      role,
      gender,
    });
    await newUser.save();

    return res
      .status(201)
      .json({ messsage: "User successfully registerd", data: newUser });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

app.post("/user/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await UserModel.findOne({ email, password });
    if (!user) {
      return res.status(404).json({ message: "Invalid Email or password" });
    }
    return res.status(200).json({ message: "Login Successful", data: user });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
});

app.get("/user/get-all-users", async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).send({ message: "Get All Users", data: users });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

connectDb()
  .then(() => {
    app.listen(7000, () => {
      console.log("Server is running on port 7000");
    });
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
