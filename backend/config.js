import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDBURI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB; // ✅ ESM export
