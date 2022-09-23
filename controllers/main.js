
const {BadRequestError }= require('../errors')
const jwt = require('jsonwebtoken')
//check if the username and password have been provide
//||Mongoose validation||Validation using JOI
const login = async (req, res) => {
    const { username, password } = req.body;
    
    if(!username || !password){
throw new BadRequestError('Please provide your credentials')
    }
   //Demo Id bcos it's not connected to the database
    const id = new Date().getDate()

const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:'30d'})
    res.status(200).json({msg:'User Created', token})
}

//Only the user with jwt authentication can acess the dashboard
const dashboard = async (req, res) => {
    //Dynamically provide the authorization token
    
    const guessNumber = Math.floor(Math.random() *100);
    res.status(200).json({msg:`Hello ${req.user.username}`, secret:`Here is your Guess Number ${guessNumber}`})

}


module.exports={
    login,
    dashboard
}