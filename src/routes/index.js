const express = require("express");
const testRoutes = require("./test_routes");
const categoryRouter = require("./categoryRoutes");
const bookRouter = require("./bookRoutes");
const borrowingRouter = require("./borrowingRoutes");
const authorRouter = require("./authorRoutes");
const borrowerRouter = require("./borrowerRoutes");

const routes = express.Router();

// kumpulkan semua routes disini per bagian ex : /author,/books dll
routes.use(testRoutes);
routes.use(categoryRouter);
routes.use(bookRouter);
routes.use(borrowingRouter);
routes.use(authorRouter);
routes.use(borrowerRouter);

module.exports = routes;
