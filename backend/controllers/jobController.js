const db = require("../config/db");

exports.getJobs = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM jobs");

    res.json({
      success: true,
      data: rows.map((job) => ({
        id: job.id,
        title: job.title,
        type: job.type,
        location: job.location,
        desc: job.description,
        icon: job.icon,
      })),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

exports.getJobById = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.execute(
      "SELECT * FROM jobs WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    const job = rows[0];

    res.json({
      success: true,
      data: {
        id: job.id,
        title: job.title,
        type: job.type,
        location: job.location,
        desc: job.description,
        icon: job.icon,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};