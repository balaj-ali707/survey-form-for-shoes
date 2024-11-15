const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 9000;
const app = express();

app.use(express.json())
app.use(cors());

require("./db/connection")
const userRoutes = require("./routes/UserResponseRoutes")

app.use("/user-response", userRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
