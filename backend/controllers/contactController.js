const { appendToSheet } = require("../utils/googleSheets");
const db = require("../config/db");

exports.createContact = async (req, res) => {
  try {
    console.log("CONTACT HIT:", req.body); // DEBUG

    const { name, email, phone, company, service, message } = req.body;

    await db.execute(
      "INSERT INTO contacts (name, email, phone, company, service, message) VALUES (?, ?, ?, ?, ?, ?)",
      [name, email, phone, company, service, message]
    );

      await appendToSheet(req.body);

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};