import mongoose from "mongoose";
import validator from "validator";

const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Input your name"],
    trim: true,
    minLength: 5,
    maxLength: 15,
  },
  email: {
    type: String,
    required: [true, "Input your email"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Provide a valid email address",
    },
  },
  password: {
    type: String,
    required: [true, "Input your password"],
    minLength: 7,
  },
  lastName: {
    type: String,
    required: [true, "Input your name"],
    trim: true,
    minLength: 5,
    maxLength: 15,
    default: "Last name",
  },
  location: {
    type: String,
    trim: true,
    maxLength: 15,
    default: "My city",
  },
});

export default mongoose.model("User", userSchema);
