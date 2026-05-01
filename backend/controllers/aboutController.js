const getAbout = (req, res) => {
  res.json({
    success: true,
    data: {
      company: "Workhance",
      description: "We provide job opportunities and services."
    }
  });
};

module.exports = { getAbout };