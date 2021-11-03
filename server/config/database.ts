//Connection file to mongo db
import mongoose from "mongoose";
const uri = "mongodb+srv://ridho:ridho2002@cluster0.n3puy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

export default connectDB;
