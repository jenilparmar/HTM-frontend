const mongoose = require("mongoose");
const { User } = require("./mongooseSchema/userSchema");
mongoose
  .connect("mongodb://127.0.0.1:27017/Classbuddy")
  .then(() => console.log("Connected!"));

const newuser = async () => {
  let user1 = new User({ email: "samarth" });
  await user1.save();
};
newuser();
console.log("done");
