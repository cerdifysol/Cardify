const express = require("express");
const cors = require("cors");

const connectDB = require("./config/mongodb");
const userRoutes = require("./routes/user.routes");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.use("/api/users", userRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
