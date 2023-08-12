config.require("dotenv");
const mongoose=require("mongoose");


const connectDB=async ()=>{
    console.log("database connected");
    return mongoose.mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

}
module.exports=connectDB;