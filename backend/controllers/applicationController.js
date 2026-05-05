const { appendApplication } = require("../utils/googleSheetsApplications");
const applicationModel = require("../models/Application");
const jobs = require("../data/jobsData");

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const cleanPhone = (phone) => {
  let digits = (phone || "").replace(/\D/g, "");

  if (digits.length === 12 && digits.startsWith("91")) {
    digits = digits.slice(2);
  }

  return digits;
};

const applyJob = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "Resume file required"
      });
    }

    if (file.mimetype !== "application/pdf") {
      return res.status(400).json({ message: "Only PDF allowed" });
    }

    const resumePath = `/uploads/${file.filename}`;

    const { name, email, phone, jobId } = req.body;

    const cleanedName = name?.trim();
    const normalizedEmail = email?.trim().toLowerCase();
    const cleanedPhone = cleanPhone(phone);
    const parsedJobId = Number(jobId);

    // ✅ validation
    if (!cleanedName || cleanedName.length > 100) {
      return res.status(400).json({ success: false, message: "Invalid name" });
    }

    if (!isValidEmail(normalizedEmail)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    if (cleanedPhone.length !== 10) {
      return res.status(400).json({ success: false, message: "Invalid phone" });
    }

    if (!Number.isInteger(parsedJobId)) {
      return res.status(400).json({ success: false, message: "Invalid jobId" });
    }

    // ✅ job check
    const job = jobs.find(j => j.id === parsedJobId);

    if (!job) {
      return res.status(400).json({ success: false, message: "Invalid jobId" });
    }

    // ✅ create user
    const userId = await applicationModel.createOrGetUser({
      name: cleanedName,
      email: normalizedEmail,
      phone: cleanedPhone
    });

    if (!userId) {
      throw new Error("User creation failed");
    }

    // ✅ create application (USE resumePath)
    await applicationModel.createApplication({
      userId,
      jobId: parsedJobId,
      resumeLink: resumePath
    });

    // ✅ sheets
    try {
      await appendApplication({
        name: cleanedName,
        email: normalizedEmail,
        phone: cleanedPhone,
        jobTitle: job.title,
        resumeLink: resumePath
      });
    } catch (err) {
      console.error("Sheets error:", err.message);
    }

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully"
    });

  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        success: false,
        message: "User already applied to this job"
      });
    }

    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// GET /api/applications
const getApplications = async (req, res) => {
  try {
    let limit = Number(req.query.limit);
    let offset = Number(req.query.offset);

    // fallback first
    if (!Number.isInteger(limit)) limit = 10;
    if (!Number.isInteger(offset)) offset = 0;

    // validate
    if (limit <= 0 || limit > 100) {
      return res.status(400).json({
        success: false,
        message: "Invalid limit (1–100 allowed)"
      });
    }

    if (offset < 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid offset"
      });
    }

    // validate jobId
    let jobId = null;
    if (req.query.jobId !== undefined) {
      const parsedJobId = Number(req.query.jobId);

      if (!Number.isInteger(parsedJobId)) {
        return res.status(400).json({
          success: false,
          message: "Invalid jobId"
        });
      }

      jobId = parsedJobId;
    }

    const rows = await applicationModel.getApplications({
      jobId,
      limit,
      offset
    });

    res.json({
      success: true,
      data: rows
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
module.exports = { applyJob, getApplications };