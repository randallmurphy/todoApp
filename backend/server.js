const mongoose = require('mongoose');
const app = require('./app');

mongoose
    .connect('mongodb://127.0.0.1:27017/todo-backend')
    .then(()=>{
        app.listen(3000, ()=>{
            console.log('server running on port 3000.');
            console.log('mongodb connected.')

        })
    })
    .catch((err) => console.error('MongoDB error:', err));