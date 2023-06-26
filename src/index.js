const express = require("express");
const userRouter = require("./routes/userRoutes");
const quoteRouter = require("./routes/quoteRoutes");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");


const dotenv = require("dotenv");

dotenv.config();

const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("listening on port " + PORT);
    });
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/users", userRouter);
app.use("/quotes", quoteRouter);

const steps = require("./steps");

app.get("/", (req, res) => {
  res.status(200).send(steps);
});
