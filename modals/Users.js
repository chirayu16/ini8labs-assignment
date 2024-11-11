const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  dob: {
    type: String
  }
});

const Users = mongoose.model("users", userSchema, "users");
module.exports = Users