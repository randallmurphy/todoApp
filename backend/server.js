require('dotenv').config();
const mongoose = require('mongoose');

const app = require('./app');

const port = 3000;

mongoose  
    .connect(process.env.MONGO_DB_ADDRESS)
    
    .then(()=>{
        
        //after mongo is connected listen for express server
        app.listen(port, ()=>{
            console.log(`Server connected on port: ${port}`);
            console.log("mongoDB connected on", process.env.MONGO_DB_ADDRESS);

        })
    })
    .catch((error)=>{
        console.log(error);
    })



