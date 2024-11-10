const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 9000;
const app = express();

app.use(cors());

require("./db/connection")

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
