const { google } = require("googleapis");
const path = require("path");

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, "../credentials.json"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

 const spreadsheetId = "1uHJgVuR7h_bC2m_Iy5vHdUdTmpEZ23GsfCqFwiZHOEQ";

const appendApplication = async (data) => {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });

  const values = [[
    data.name,
    data.email,
    data.phone,
    data.jobTitle,
    data.resumeLink,
    new Date().toISOString()
  ]];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Applications!A:F", // create this tab in sheet
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
};

module.exports = { appendApplication };