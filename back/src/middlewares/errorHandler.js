
const {StatusCodes} = require('http-status-codes');

module.exports =(err,req,res,next) =>{
    console.error('handler error here',err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:err.message})
}