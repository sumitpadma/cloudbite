import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sumitpadma:Padma123@cluster0.bbd5d.mongodb.net/cloudbite"
    )
    .then(() => console.log("DB connected"));
};
