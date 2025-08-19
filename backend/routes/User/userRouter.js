const { token } = require("morgan");
const { signUp, login, findUser } = require("./controllers/userController");
const checkIsAlpha = require("./helpers/checkIsAlpha");
const checkIsAlphanumeric = require("./helpers/checkIsAlphanumeric");
const checkIsEmail = require("./helpers/checkIsEmail");
const checkIsEmpty = require("./helpers/checkIsEmpty");
const checkIsUndefined = require("./helpers/checkIsUndefined");
const userRouter = require("express").Router();
const jwt = require('jsonwebtoken');
const checkJwtToken = require("./utils/jwtMiddleware");

userRouter.post(
    '/signup',
     checkIsUndefined, 
     checkIsEmpty,
     checkIsAlpha,
     checkIsEmail, 
     checkIsAlphanumeric, 
     signUp
    );

// make a edit user by id endpoint route;
userRouter.put('/edit-user-by-id/:id', checkJwtToken, );

userRouter.post('/login', checkIsUndefined, checkIsEmpty, login)

userRouter.get('/get-user',checkJwtToken, findUser); //

// router.get('/json',(req,res)=>{
    
//     const token = jwt.sign(
//         {
//             email: "rand@gmail.com",
//             username: "randall",
//             id: "123456"
            
//         },
//         "supercalifragilisticexpialidoshious343243",
//         {
//             expiresIn: "1d"
//         }
//     )
//     res.json({message: "token created", token});
// })

module.exports = userRouter;




