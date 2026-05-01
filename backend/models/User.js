const db = require("../config/db");

const getAllUsers = async () => {
  const [rows] = await db.execute("SELECT * FROM users");
  return rows;
};

const getUserById = async (id) => {
  const [rows] = await db.execute(
    "SELECT * FROM users WHERE id = ?",
    [id]
  );
  return rows[0];
};

const checkUserExists = async (id) => {
  const [rows] = await db.execute(
    "SELECT id FROM users WHERE id = ?",
    [id]
  );
  return rows.length > 0;
};

const updateUser = async (id, { name, email, phone }) => {
  const [result] = await db.execute(
    "UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?",
    [name, email, phone, id]
  );

  return result.affectedRows > 0;
};

module.exports = {
  getAllUsers,
  getUserById,
  checkUserExists,
  updateUser
};