const express =require("express");
const router =express.Router();

const {postAllItems} =require("../controller/items");

router.route("/items").post(postAllItems);

module.exports=router;