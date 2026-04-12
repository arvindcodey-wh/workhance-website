const db = require("../config/db");

const checkJobExists = async (jobId) => {
    const [rows] = await db.execute(
        "SELECT id FROM jobs WHERE id = ?",
        [jobId]
    );
    return rows.length > 0;
};

const checkUserExists = async (userId) => {
    const [rows] = await db.execute(
        "SELECT id FROM users WHERE id = ?",
        [userId]
    );
    return rows.length > 0;
};

const createApplication = async ({ userId, jobId, resumeLink }) => {
  const query = `
    INSERT INTO applications (user_id, job_id, resume_link)
    VALUES (?, ?, ?)
  `;

  return db.execute(query, [
    userId,
    jobId,
    resumeLink
  ]);
};

const getApplications = async ({ jobId, limit, offset }) => {
  let query = `
    SELECT 
      a.id,
      u.name,
      u.email,
      j.id AS job_id,
      j.title,
      j.company,
      a.resume_link,
      a.created_at
    FROM applications a
    JOIN jobs j ON a.job_id = j.id
    JOIN users u ON a.user_id = u.id
  `;

  const params = [];

  if (jobId !== null) {
    query += " WHERE a.job_id = ?";
    params.push(jobId);
  }

  query += ` ORDER BY a.created_at ASC LIMIT ${limit} OFFSET ${offset}`;

  const [rows] = await db.execute(query, params);
  return rows;
};

module.exports = {
    checkJobExists,
    checkUserExists,
    createApplication,
    getApplications   // 🔥 THIS was missing earlier
};