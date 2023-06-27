const quoteModel = require("../models/quote");

const createQuote = async (req, res) => {
  const { title, description } = req.body;

  const newQuote = new quoteModel({
    title: title,
    description: description,
    userId: req.userId,
  });

  try {
    await newQuote.save();

    res.status(200).json(newQuote);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error saving quote" });
  }
};
const updateQuote = async (req, res) => {
  const id = req.params.id;
  // const { title, description } = req.body;

  // const Quote = new quoteModel({
  //   title: title,
  //   description: description,
  //   userId: req.userId,
  // });

  try {
    const newQuote = await quoteModel.find(id);
    res.status(202).json(newQuote);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
const deleteQuote = async (req, res) => {
  const id = req.params.id;
  try {
    const quote = await quoteModel.findByIdAndRemove(id);
    res.status(202).json(quote);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
const getQuote = async (req, res) => {
  try {
    const quotes = await quoteModel.find({ userId: req.userId });
    res.status(200).json(quotes);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};

module.exports = { createQuote, updateQuote, deleteQuote, getQuote };
