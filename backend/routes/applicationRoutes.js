const express = require("express");
const router = express.Router();

const { applyJob, getApplications } = require("../controllers/applicationController");
const upload = require("../middlewares/upload"); // 👈 add this

// GET applications
router.get("/", getApplications);

// POST application with resume upload
router.post(
  "/",
  upload.single("resume"), // 👈 multer middleware
  applyJob
);

module.exports = router;