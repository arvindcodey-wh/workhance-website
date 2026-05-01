const getServices = (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, title: "Web Development" },
      { id: 2, title: "App Development" }
    ]
  });
};

module.exports = { getServices };