const Item =require("../module/items");

const postAllItems=async(req,res)=>{
    try {
        const { name, number,comment } = req.body;
        // Create a new item using the Item model
        const newItem = new Item({
          name,
          number,
          comment
        });
        // Save the new item to the database
        await newItem.save();
        console.log("hlllo");
        res.status(201).json(newItem);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
}

module.exports={postAllItems};