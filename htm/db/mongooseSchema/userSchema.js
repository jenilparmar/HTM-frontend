const { Email } = require("@mui/icons-material");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  totalQuestion: {
    type: Number,
  },
  about: {
    type: String,
  },
});

module.exports.User = mongoose.model("User", userSchema);
