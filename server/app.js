const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./schemas/User");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;
const db = "mongodb://localhost:27017/cerdify";

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log(error));

// User creation
app.post("/api/users", async (req, res) => {
  try {
    const { tokenAdress, name } = req.body;

    if (!tokenAdress) {
      return res.status(400).json({ error: "tokenAdress is required" });
    }

    const existingUser = await User.findOne({ tokenAdress });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const newUser = new User({ tokenAdress, userName: name });
    await newUser.save();

    res.status(201).json({ message: "User created", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Get user via POST (tokenAdress in body)
app.post("/api/users/get", async (req, res) => {
  try {
    const { tokenAdress } = req.body;

    if (!tokenAdress) {
      return res.status(400).json({ error: "tokenAdress is required" });
    }

    const user = await User.findOne({ tokenAdress });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
