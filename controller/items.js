const Item = require("../module/items");

// const postAllItems=async(req,res)=>{

//   console.log("request of api data::- ",req)
//   console.log(req)


//     try {
//         const { name, number,comment } = req.body;
//         // Create a new item using the Item model
//         const newItem = new Item({
//           name: name,
//           number: number,
//           comment: comment
//         });
//         // Save the new item to the database
//         await newItem.save();
//         console.log("Helllo",req.body);

//         res.status(200).json({
//             maudaList: newItem              
//         });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' ,error:error});
//       }
// }

// module.exports={postAllItems};

const postAllItems = async (req, res) => {
  try {
    const { name, number, comment } = req.body;
    // Create a new item using the Item model
    const newItem = new Item({
      name: name,
      number: number,
      comment: comment,
    });
    // Save the new item to the database
    await newItem.save();
    console.log("Hello", req.body);

    // Create the response object with the renamed field
    const responseData = {
      newItem: newItem,
    };

    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error });
  }
};

module.exports = { postAllItems };