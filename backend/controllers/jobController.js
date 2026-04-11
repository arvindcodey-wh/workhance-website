const jobModel = require("../models/Job");

// GET /api/jobs
const getJobs = async (req, res) => {
  try {
    let { search, location, company, sort } = req.query;

    let limit = Number(req.query.limit);
    let offset = Number(req.query.offset);

    if (!Number.isInteger(limit)) limit = 10;
    if (!Number.isInteger(offset)) offset = 0;

    if (limit <= 0 || limit > 50) {
      return res.status(400).json({
        success: false,
        message: "Invalid limit"
      });
    }

    if (offset < 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid offset"
      });
    }

    const jobs = await jobModel.getAllJobs({
      search,
      location,
      company,
      limit,
      offset,
      sort
    });

    res.json({
      success: true,
      data: jobs
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// GET /api/jobs/:id
const getJobById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const job = await jobModel.getJobById(id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found"
      });
    }

    res.json({
      success: true,
      data: job
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

const createJob = async (req, res) => {
  try {
    const { title, company, location, description } = req.body;

    if (!title?.trim() || !company?.trim()) {
      return res.status(400).json({
        success: false,
        message: "title and company required"
      });
    }

    const jobId = await jobModel.createJob({
      title,
      company,
      location,
      description
    });

    res.status(201).json({
      success: true,
      jobId
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

module.exports = { getJobs, getJobById, createJob };