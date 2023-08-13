const bodyParser = require('body-parser');
const express = require('express');
const item_routes = require("./routes/items");
const connectDB = require("./db/connect");
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api', item_routes);

app.get('/', (req, res) => {
  res.send('Api is live');
});

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (e) {
    console.log("error " + e);
  }
}

start();