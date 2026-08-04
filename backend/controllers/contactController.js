const { appendToSheet } = require("../utils/googleSheets");
const db = require("../config/db");

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const cleanPhone = (phone) => {
  let digits = (phone || "").replace(/\D/g, "");

  // remove country code (India: 91)
  if (digits.length === 12 && digits.startsWith("91")) {
    digits = digits.slice(2);
  }

  return digits;
};

exports.createContact = async (req, res) => {
  try {
    console.log("CONTACT HIT:", req.body); // DEBUG

    const { name, email, phone, company, service, message } = req.body;

    // validation
    if (!name || name.length > 100) {
      return res.status(400).json({ error: "Invalid name" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    const cleanedPhone = cleanPhone(phone);

    if (cleanedPhone.length !== 10) {
      return res.status(400).json({ error: "Invalid phone" });
    }

    if (message && message.length > 1000) {
      return res.status(400).json({ error: "Message too long" });
    }

    /*await db.execute(
      "INSERT INTO contacts (name, email, phone, company, service, message) VALUES (?, ?, ?, ?, ?, ?)",
      [
        name,
        email,
        cleanedPhone,
        company || null,
        service || null,
        message || null
      ]
    );
    */

    try {
      await appendToSheet({
        name,
        email,
        phone: cleanedPhone,
        company,
        service,
        message
      });
    } catch (err) {
      console.error("Sheets failed:", err.message);
    }

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};
