require("dotenv").config();
const axios = require("axios");
const { githubUserListSchema } = require("../validations/github.user.schema");

const URL =  `https://akabab.github.io/starwars-api/api/all.json`
//process.env.API_GITHUB + `/starwars-api/api/all.json`

//TODO addd .env
exports.createUser = async (data) => {
    return { id: Date.now(), ...data };
};
  
exports.getUserById = async (id) => {
    return { id, name: "Sample" };
};

  
exports.fetchReposByUserName = async () => {
 
    const response = await axios.get(URL );
  
    const formatted = response.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      height: repo.id,
      mass: repo.id,
      gender: repo.gender
    }));
     return githubUserListSchema.parse(formatted);
};