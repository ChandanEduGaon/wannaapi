const express = require("express");
const { signup, signin } = require("../controllers/userController");
const userRouter = express.Router();


userRouter.post("/", (req, res) => {
    res.status(200).send(req.body);
});
userRouter.post("/signup", signup);
userRouter.post("/signin", signin);

module.exports = userRouter;