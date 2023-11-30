const { UserModel } = require("./model");
const deletedUser = async (req, res) => {
  const { userId } = req.params;
  console.log('userid', userId)
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    const deltedUser = await UserModel.findByIdAndDelete(userId);
    return res.status(200).send({ message: "User deleted", data: deltedUser });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { deletedUser };