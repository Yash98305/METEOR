import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL || "mongodb+srv://meteorteamyyjv:1234@meteor.dsoab2u.mongodb.net/METEOR?retryWrites=true&w=majority");
    console.log(                                                   
      `Conneted To Mongodb Databse ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`);
  }
};


export default connectDB;
