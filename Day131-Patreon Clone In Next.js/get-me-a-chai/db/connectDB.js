import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect("mongodb://127.0.0.1:27017/chai");
};

export default connectDB;