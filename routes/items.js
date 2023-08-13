const express =require("express");
const router =express.Router();
const app = express();
const {postAllItems} =require("../controller/items");
//const bodyParser = require("body-parser");
//app.use(bodyParser.urlencoded({ extended: false }));
router.route("/items").post(postAllItems);

module.exports=router;