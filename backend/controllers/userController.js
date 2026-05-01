const userModel = require("../models/User");

// GET /api/users
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();

    res.json({
      success: true,
      data: users
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// GET /api/users/:id
const getUserById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const user = await userModel.getUserById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.json({
      success: true,
      data: user
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// PUT /api/users/:id
const updateUser = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, email, phone } = req.body;

    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return res.status(400).json({
        success: false,
        message: "name, email and phone required"
      });
    }

    // phone validation
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number"
      });
    }

    const updated = await userModel.updateUser(id, {
      name,
      email,
      phone
    });

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.json({
      success: true,
      message: "User updated successfully"
    });

  } catch (err) {

    if (err.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        success: false,
        message: "Email or phone already exists"
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

module.exports = { getAllUsers, getUserById, updateUser };