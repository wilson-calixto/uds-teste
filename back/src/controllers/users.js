const UserService = require("../services/users");
const {StatusCodes} = require('http-status-codes');


exports.createUser = async (req, res) => {
    const user = await UserService.createUser(req.body);
    res.status(StatusCodes.CREATED).json(user);
};

exports.getUser = async (req, res) => {
    const user = await UserService.getUserById(req.params.id);
    res.json({ message: 'User logged in successfully', data: user });
};

exports.getGithubUserRepos = async (req, res, next) => {
    try {
      const username = req.params.name;
      const parsedRepos = await UserService.fetchReposByUserName(username);
      res.json(parsedRepos);
    } catch (error) {
      //add midleware to deal with it 
      res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid response format"});//
      // next(error);
    }
  };