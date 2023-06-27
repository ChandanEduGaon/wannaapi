const express = require("express");
const {
  getQuote,
  createQuote,
  deleteQuote,
  updateQuote,
} = require("../controllers/quoteController");
const auth = require("../middlewares/auth");
const quoteRouter = express.Router();

quoteRouter.get("/", auth, getQuote);

quoteRouter.post("/", auth, createQuote);

quoteRouter.delete("/:id", auth, deleteQuote);

quoteRouter.patch("/:id", auth, updateQuote);

module.exports = quoteRouter;
