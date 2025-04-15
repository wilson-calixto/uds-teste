const express = require('express');
const { createUser,  getGithubUserRepos } = require("../controllers/users.js");
const validateData = require("../middlewares/validateData.js");
const userSchema = require("../validations/user.schema.js");


const router = express.Router();

 
router.post("/", validateData(userSchema), createUser);

router.get("/", getGithubUserRepos);

module.exports = router;
