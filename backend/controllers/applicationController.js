const { appendApplication } = require("../utils/googleSheetsApplications");
const applicationModel = require("../models/Application");
const jobs = require("../data/jobsData");

// POST /api/applications
const applyJob = async (req, res) => {
  try {
    const { name, email, phone, jobId, resumeLink } = req.body;
    const parsedJobId = Number(jobId);

    // required check
    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      jobId == null ||
      !resumeLink?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "name, email, phone, jobId and resumeLink are required"
      });
    }

    if (!email.includes("@")) {
      return res.status(400).json({
        success: false,
        message: "Invalid email"
      });
    }
    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone"
      });
    }

    if (!Number.isInteger(parsedJobId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid jobId"
      });
    }

    // check job
    const jobExists = await applicationModel.checkJobExists(parsedJobId);

    if (!jobExists) {
      return res.status(400).json({
        success: false,
        message: "Invalid jobId"
      });
    }
    const job = jobs.find(j => j.id === parsedJobId);
    if (!job) {
      return res.status(500).json({
        success: false,
        message: "Job data mismatch"
      });
    }
    const userId = await applicationModel.createOrGetUser({
      name,
      email,
      phone : cleanPhone
    });

    await applicationModel.createApplication({
      userId,
      jobId: parsedJobId,
      resumeLink
    });

    try {
      await appendApplication({
        name,
        email,
        phone: cleanPhone,
        jobTitle: job.title,
        resumeLink
      });
    } catch (err) {
      console.error("Sheets error:", err.message);
    }


    res.status(201).json({
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
    res.status(500).json({
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