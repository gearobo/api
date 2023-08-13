const mongoose = require( "mongoose");

const itemSchema = mongoose.Schema({
    name: { 
      type: String, 
      // required: true 
    },
    number: {
      type: String,
      // required: true
    },
    comment: { 
      type: String,
      // required: true
    },
  });

  module.exports=mongoose.model("Item",itemSchema);