const getContact = (req, res) => {
  res.json({
    success: true,
    data: {
      email: "support@workhance.com",
      phone: "+91-9876543210"
    }
  });
};

module.exports = { getContact };