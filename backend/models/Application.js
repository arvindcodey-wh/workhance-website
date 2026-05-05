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

const createOrGetUser = async ({ name, email, phone }) => {
  // check existing
  const [existing] = await db.execute(
    "SELECT id FROM users WHERE email = ?",
    [email]
  );

  if (existing.length > 0) {
    return existing[0].id;
  }

  // create new
  const [result] = await db.execute(
    "INSERT INTO users (name, email, phone) VALUES (?, ?, ?)",
    [name, email, phone]
  );

  return result.insertId;
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

const getUserDetails = async (userId) => {
  const [rows] = await db.execute(
    "SELECT name, email, phone FROM users WHERE id = ?",
    [userId]
  );
  return rows[0];
};


module.exports = {
  checkJobExists,
  checkUserExists,
  createApplication,
  getApplications,
  createOrGetUser,
  getUserDetails
};