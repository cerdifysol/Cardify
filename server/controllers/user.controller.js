const User = require("../schemas/User");

const createUser = async (req, res) => {
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
};

const getUsers = async (req, res) => {
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
};

module.exports = {
  createUser,
  getUsers,
};
