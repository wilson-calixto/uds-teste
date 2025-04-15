const express = require('express');
const { createUser, getUser, getGithubUserRepos } = require("../controllers/users.js");
const validateData = require("../middlewares/validateData.js");
const userSchema = require("../validations/user.schema.js");


const router = express.Router();


// router.get("/", (req,res)=>{

//     res.send('Usuário criado com sucesso')
// })

router.post("/", validateData(userSchema), createUser);

router.get("/:name", getGithubUserRepos);


// router.get("/:id", getUser);


module.exports = router;
