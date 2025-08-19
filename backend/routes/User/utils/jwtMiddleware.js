const jwt = require('jsonwebtoken');

function checkJwtToken(req,res,next){
    try {
        //console.log(req.headers)
        if(req.headers.authorization){
           const token = req.headers.authorization.slice(7); // bearer is the first seven digits in jwt. 
           const decoded = jwt.verify(token, process.env.PRIVATE_JWT_KEY) // verify it came from the server;
           //console.log(decoded);
            res.locals.decodedJwt = decoded;
           next()
        } else {
            throw { message: "you dont have permission!", statusCode: 500};
        }
         //res.json({message: "correct"});
    } catch (error) {
        res.status(500).json({message: error.message, error});
    }
}


module.exports = checkJwtToken;


