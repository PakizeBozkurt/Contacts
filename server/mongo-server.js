const express = require("express");
const User = require("./schema.js");
const connect = require("./connection.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
connect().then((r) => console.log("Connected to MongoDB"));

//New User created
const insertUser = async (req, res) => {
  const user = req.body;
  try {
    const newUser = await User.create(user);
    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
app.post("/api/user", insertUser);
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: `${users.length} users found`,
      users: users,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
app.get("/api/user", getUsers);
const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      message: "User found",
      user: user,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
app.get("/api/user/:id", getUser);
const updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email, picture, department } = req.body;
  try {
    const update = await User.findByIdAndUpdate(
      id,
      { name, email, picture, department },
      { new: true }
    );
    res.status(200).json({
      message: "User updated",
      user: update,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
app.put("/api/user/:id", updateUser);
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
app.delete("/api/user/:id", deleteUser);
app.listen(5000, () => console.log("Server Running"));
