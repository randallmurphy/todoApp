//const { isAlpha, isStrongPassword, isAlphanumeric } = require('validator');
const User = require('../model/User');
const bcrypt = require('bcryptjs');
//const { default: isEmail } = require('validator/lib/isEmail');
const jwt = require('jsonwebtoken');


async function signUp(req, res) {
   
    try {
        // if(!req.body) {
        //     res.status(400).json({ message: "body is required" })
        // } else if(
        //     !req.body.firstName ||
        //     !req.body.lastName ||
        //     !req.body.userName || 
        //     !req.body.email || 
        //     !req.body.password){
        //         res.status(400).json({message: " must fill out all required fields"});
        // } else {
            const { firstName, lastName, userName, email, password } = req.body;
            console.log(res.locals);
            const {errorObj} = res.locals;
            // if( !isAlpha(firstName)|| !isAlpha(lastName) ){
            //     errorObj.nameError = "First and lst name must be alphanumeric";
            //     //res.json({message: "First and lst name must be alphanumeric"});
            // } 
            // if(!isEmail(email)){
            //     errorObj.emailError = "email must be valid";
            //     //res.json({message: "email must be valid"});
            // } 
            // if(!isStrongPassword(password)){
            //     errorObj.passwordError = "password must be 8 char long and 1 symbol, 1 uppercase, 1 lowercase, 1 number";
            //     //res.json({message: "password must be 8 char long and 1 symbol, 1 uppercase, 1 lowercase, 1 number"});
            // } 
            // if(!isAlphanumeric(userName)){
            //     errorObj.userName = "username must be alphanumeric";
            //     //res.json({message: "username must be alphanumeric"});
            // } 
            if(Object.keys(errorObj).length > 0){
                res.status(400).json({messaage: "Validation Error", payload: errorObj});
            } else {
                
                const newUser = new User({
                firstName,
                lastName,
                userName,
                email,
                password: await bcrypt.hash(password, 10)
            })
            await newUser.save();
            res.json({ message: 'user created', payload: newUser });
        }
   // }
               
            
        
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
    }
}

//find-user/:id endpoint
// const findUser = async (req,res) =>{
//     try {
//         const foundUser = await User.find({_id : req.params.id}) // can search for anything just by changing this portion;
//         res.json({message: "found user", payload: foundUser});
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error: error.message })
//     }
// }

const findUser = async (req,res) =>{
    try {
        console.log(res.locals.decodedJwt)
        if(res.locals.decodedJwt.id){
            const foundUser = await User.findById(res.locals.decodedJwt.id) // can search for anything just by changing this portion;
        res.json({message: "found user", payload: foundUser});
        } else {
            res.status(500).json({message: "not Authorized."})
        }
        
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
    }
}

const login = async(req,res)=>{
    try {
    
        const { email, password } = req.body;
        const foundUser = await User.findOne({email});
        if(!foundUser){
            res.status(400).json({message: "username or password incorrect, more safe way" })
        } else {
            const passwordMatch = await bcrypt.compare(password, foundUser.password);
            if(!passwordMatch){
                res.status(400).json({message: "username or password incorrect"});

            } else{
                //res.json({message: "user logged in"});
                console.log(process.env.PRIVATE_JWT_KEY)
                const token = jwt.sign(
                    {
                        email: foundUser.email,
                        username: foundUser.userName,
                        id: foundUser._id
                    },
                   process.env.PRIVATE_JWT_KEY, //"thisisaprivatekey", // bad code poor security bad practice use .env;
                    {
                        expiresIn: "1d"
                    }
                )
                res.json({message: "user logged in ", payload: token});
            }
        }
    } catch (error) {
        res.status(500).json({message:"Server error", error: error.message});
    }
}

module.exports = {
    signUp,
    login,
    findUser
}