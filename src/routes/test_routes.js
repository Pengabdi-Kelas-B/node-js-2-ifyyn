const express = require("express");
const testController = require("../controllers/test_controller");

const testRoutes = express.Router();

testRoutes.get("/test/health", testController.healthCheck);
testRoutes.post("/test/create", testController.createTest);

module.exports = testRoutes;
