import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  totalQuestion: {
    type: Number,
  },
  about: {
    type: String,
  },
  right: {
    type: Number,
  },
  wrong: {
    type: Number,
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
