const express = require("express");
const cors = require("cors");

const db = require("./config/db");

const serviceRoutes = require("./routes/serviceRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const contactRoutes = require("./routes/contactRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const userRoutes = require("./routes/userRoutes"); // ✅ ADD THIS

const app = express(); // ✅ MUST come before app.use

app.use(cors());
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

// routes
app.use("/api/services", serviceRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/users", userRoutes); // ✅ ONLY HERE (once)

// test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// DB test
(async () => {
  try {
    const [rows] = await db.execute("SELECT 1");
    console.log("DB Connected:", rows);
  } catch (err) {
    console.error("DB Connection Failed:", err);
  }
})();

app.listen(5000, () => {
  console.log("Server running on port 5000");
});