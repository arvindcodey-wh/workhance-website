const db = require("../config/db");

const getAllJobs = async ({ search, location, company, limit, offset, sort }) => {
    let query = "SELECT * FROM jobs WHERE 1=1";
    const params = [];

    if (search) {
        query += " AND (title LIKE ? OR description LIKE ?)";
        params.push(`%${search}%`, `%${search}%`);
    }

    if (location) {
        query += " AND location LIKE ?";
        params.push(`%${location}%`);
    }

    if (company) {
        query += " AND company LIKE ?";
        params.push(`%${company}%`);
    }

    // sorting (safe whitelist)
    const allowedSort = ["created_at", "title", "company"];
    const sortField = allowedSort.includes(sort) ? sort : "created_at";

    query += ` ORDER BY ${sortField} ASC, id ASC`;

    // pagination (same fix as before)
    query += ` LIMIT ${limit} OFFSET ${offset}`;

    const [rows] = await db.execute(query, params);
    return rows;
};

const getJobById = async (id) => {
    const [rows] = await db.execute(
        "SELECT * FROM jobs WHERE id = ?",
        [id]
    );
    return rows[0];
};

const createJob = async ({ title, company, location, description }) => {
    const [result] = await db.execute(
        `INSERT INTO jobs (title, company, location, description)
     VALUES (?, ?, ?, ?)`,
        [title, company, location || null, description || null]
    );
    return result.insertId;
};

module.exports = {
    getAllJobs,
    getJobById,
    createJob
};