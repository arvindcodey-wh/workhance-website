const express = require("express");
const router = express.Router();

const { applyJob, getApplications } = require("../controllers/applicationController");

router.get("/", getApplications);   // 👈 ADD THIS
router.post("/", applyJob);

module.exports = router;