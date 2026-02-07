import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://tanvideshmukh999_db_user:medicare123@cluster0.nlhhlzd.mongodb.net/MediCare').then(()=>{
        console.log('DB CONNECTED');
    })
}