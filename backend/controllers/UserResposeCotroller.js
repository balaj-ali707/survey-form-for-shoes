const UserFormResponse = require("../models/FormData");

const saveData = async (req, res) => {
  try {
    const data = req.body;

    const userResponseFound = await UserFormResponse.findOne({ email: data.email });
    if (userResponseFound) {
<<<<<<< HEAD
      return res.status(400).json({ message: "User data already exists." });
=======
      return res.status(404).json({ message: "User data already exists." });
>>>>>>> 41ec8a4 (saveData controller error resolved)
    }
    const newUserResponse = new UserFormResponse({
      email: data.email,
      first_question: data.progress.step1,
      second_question: data.progress.step2,
    });

    await newUserResponse.save();

    res.status(200).json({ message: "User response saved" });
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getData = async (req, res) => {
  try {
    const { email } = req.query;

    const userResponseFound = await UserFormResponse.findOne({ email: email });
    if (!userResponseFound) {
      return res.status(404).json({ message: "No user response found" });
    }

    res
      .status(200)
      .json({ message: "User response fetched", body: userResponseFound });
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { saveData, getData };
