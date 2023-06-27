const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "QUOTEAPI";

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Existing user check

    const existinguser = await userModel.findOne({ email: email });

    if (existinguser) {
      return res.status(200).json({ messsage: "User already exists" });
    }
    // Hash Password

    const hashPassword = await bcrypt.hash(password, 10);

    // user Create

    const result = await userModel.create({
      email: email,
      password: hashPassword,
      username: username,
    });

    //Toek Generation
    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      SECRET_KEY
    );

    res.status(201).json({ user: result, token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ messsage: "Something went wrong" });
  }
};
const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Existing user check

    const existinguser = await userModel.findOne({ email: email });

    if (!existinguser) {
      return res.status(404).json({ messsage: "User not found" });
    }

    const matchPassword = await bcrypt.compare(password, existinguser.password);

    if (!matchPassword) {
      res.status(400).json({ messsage: "Password Wrong" });
    }

    //Toek Generation
    const token = jwt.sign(
      {
        email: existinguser.email,
        id: existinguser._id,
      },
      SECRET_KEY
    );
    res.status(200).json({ user: existinguser, token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ messsage: "Something went wrong" });
  }
};

module.exports = { signin, signup };
