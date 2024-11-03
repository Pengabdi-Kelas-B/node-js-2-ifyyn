const testController = {};

testController.healthCheck = (req, res) => {
  res.status(200).json({
    ping: "pong !",
  });
};
testController.createTest = (req, res) => {
  res.status(201).json({
    message: "Data created successfully",
    data: req.body, // Menampilkan data yang dikirim
  });
};
module.exports = testController;
