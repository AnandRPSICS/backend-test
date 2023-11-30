const userRouter = require("express").Router();
const { UserModel } = require("./model");
const { deletedUser } = require("./controllers.js");

userRouter.patch("/edit/:userId", async (req, res) => {
  const { userId } = req.params;
  console.log("userid", userId);
  try {
    const user = await UserModel.findById(userId);
    console.log("user", user);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });

    return res.status(200).send({ message: "User updated", data: updatedUser });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

userRouter.post('/insert-multiple-data', (req, res) => {
  const {data} = req.body;
  const multipleDatas = UserModel.insertMany(data);
  return res.status(200).send({message: 'Data inserted successfully', data: multipleDatas});
})



userRouter.delete("/delete/:userId", deletedUser);

module.exports = { userRouter };
