import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String
  /*
  email: String,
  age: Number,
  active: Boolean
  */
});

export default mongoose.model("User", UserSchema);
