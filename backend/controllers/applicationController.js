const applicationModel = require("../models/Application");

// POST /api/applications
const applyJob = async (req, res) => {
  try {
    const { userId, jobId, resumeLink } = req.body;

    const parsedUserId = Number(userId);
    const parsedJobId = Number(jobId);

    // required check
    if (
      userId == null ||
      jobId == null ||
      !resumeLink?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "userId, jobId and resumeLink are required"
      });
    }

    // type check
    if (!Number.isInteger(parsedUserId) || !Number.isInteger(parsedJobId)) {
      return res.status(400).json({
        success: false,
        message: "userId and jobId must be valid numbers"
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

    // check user
    const userExists = await applicationModel.checkUserExists(parsedUserId);
    if (!userExists) {
      return res.status(400).json({
        success: false,
        message: "Invalid userId"
      });
    }

    await applicationModel.createApplication({
      userId: parsedUserId,
      jobId: parsedJobId,
      resumeLink
    });

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