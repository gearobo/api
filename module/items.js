const mongoose =require("mongoose");

const itemSchema = mongoose.Schema({
    name: { type: String },
    number: {
      type: String
    },
    comment: { type: String },
  });

  module.exports=mongoose.model("Item",itemSchema);