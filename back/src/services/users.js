require("dotenv").config();
const axios = require("axios");
const { githubUserListSchema } = require("../validations/github.user.schema");

const URL = process.env.API_GITHUB + `/users`

exports.createUser = async (data) => {
    return { id: Date.now(), ...data };
};
  
exports.getUserById = async (id) => {
    return { id, name: "Sample" };
};

  
exports.fetchReposByUserName = async (username) => {
    const response = await axios.get(URL + `/${username}/repos`);
    const formatted = response.data.map(repo => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
      stars: repo.stargazers_count,
      language: repo.language
    }));
    return githubUserListSchema.parse(formatted);
};