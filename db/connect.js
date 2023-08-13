// require('dotenv').config()
// const mongoose=require("mongoose");


// const connectDB=async ()=>{
//     console.log("database connected");
//     return mongoose.mongoose.connect(process.env.MONGODB_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
// }
// module.exports=connectDB;


const mongoose = require('mongoose');

const connectDB = async () => {
  console.log('Connecting to the database');
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Set the appropriate write concern here
      // Example: use "majority" write concern
      // Make sure to remove the extra semicolon in "w: 'majority;'"
      // It should be "w: 'majority'"
      w: 'majority',
      wtimeout: 0,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); // Exit the application if the database connection fails
  }
};

module.exports = connectDB;
