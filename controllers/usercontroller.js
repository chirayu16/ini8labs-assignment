// usercontroller.js
const Users = require("../modals/Users");

exports.registerUsers = async (req, res) => {
  const { name, email, dob } = req.body;
  Users.create(
    { name, email, dob },
    function (err, user) {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json({ user });
      }
    }
  );
};

// New function to update user
exports.updateUser = async (req, res) => {
  const userId = req.params.id; // Get the user ID from the URL parameter
  const { name, email, dob } = req.body;

  try {
    const updatedUser = await Users.findByIdAndUpdate(
      userId,
      { name, email, dob },
      { new: true } // Option to return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user: updatedUser });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await Users.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await Users.find(); // Fetch all users
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
};