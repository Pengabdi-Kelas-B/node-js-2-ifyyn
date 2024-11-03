const mongoose = require("mongoose");
const AuthorSchema = require("./Authors");
const BookSchema = require("./Book");
const BookStockSchema = require("./BookStock");
const BorrowerSchema = require("./Borrower");
const BorrowingSchema = require("./Borrow");
const CategorySchema = require("./Category");
const StockLogSchema = require("./stockLog");

module.exports = {
  Book: mongoose.model("Book", BookSchema),
  Author: mongoose.model("Author", AuthorSchema),
  Category: mongoose.model("Category", CategorySchema),
  Borrower: mongoose.model("Borrower", BorrowerSchema),
  Borrowing: mongoose.model("Borrowing", BorrowingSchema),
  BookStock: mongoose.model("BookStock", BookStockSchema),
  StockLog: mongoose.model("StockLog", StockLogSchema),
};
