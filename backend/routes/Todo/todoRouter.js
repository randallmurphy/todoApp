const express = require('express');
const router = express.Router();
const {
    getAllTodos,
    createTodo,
    updateTodoById,
    deleteTodoById
} = require('./controllers/todoController');

router.get('/get-all-todos', getAllTodos);
router.post('/create-todo', createTodo);
router.put('/update-todo/:id', updateTodoById);
router.delete('/delete-todo/:id', deleteTodoById);

module.exports = router;






// const express = require('express');
// const router = express.Router();
// const uuidv4 = require('uuid').v4;

// let todos = [
//   {
//     id: uuidv4(),
//     todo: "do laundry",
//     done: "false"
//   },
//   {
//     id: uuidv4(),
//     todo: "wash dishes",
//     done: "true"
//   }
// ]


// router.get('/get-all-todos', (req,res)=>{
//     res.json(todos)
// })

// router.get('/get-todo-by-id/:id', (req,res)=>{
//     const todo = todos.find(todo => todo.id === req.params.id);
//     if(!todo){
//         return res.json({message: "Todo does not exist!"});
//     }
//     res.json(todo);

    
// // const foundTodo = todos.find(item=> item.id === req.params.id){
// //  if(foundTodo){
// //      return res.json({message: "found todo"})
// //  } else{
// //      return res.json({message: "did not find todo"})
// //  }
// //      
// //  }


// })

// router.get('/get-todos-by-done/:done', (req,res)=>{

//     const isDone = req.params.done;
//     const newDoneArr = [];
//     for(let i = 0; i < todos.length; i++){
//         if(todos[i].done === isDone){
//             newDoneArr.push(todos[i])
//         }
//     }
//     res.json({message:"found todos", payload: newDoneArr});


//     // const isDone = req.params.done;
//     // const doneTodo = todos.filter(todo => todo.isDone === req.params.done);
//     // if(!doneTodo){
//     //     return res.json({message: "Todo not done!"});
//     // }
//     // res.json(isDone);
    

//     // const doneParam = req.params.done;
//     // if(doneParam !== "true" && doneParam !== "false"){
//     //     return res.json({message: "invalid done status"});
//     // }

//     // const doneBool = doneParam === "true";

//     // const filteredTodos = todos.filter((todo)=>todo.done === doneBool.toString())
        
//     // if(filteredTodos.length === 0){
//     //         return res.json({message: "No todos match the given done status"});
//     //     }
//     //     res.json(filteredTodos);
    
//     // const isDone = req.params.done;
//     //     console.log("params: ", req.params.done, "query: ", req.query.done);
//     // res.json({message: "found todos"});




// })

// router.post('/create-new-todo', (req,res)=>{

    
// if(todos.find(item => item.todo.toLowerCase() === req.body.todo)){
//         return res.json({message: "todo all ready used."})
//     }else{
//        const newTodo = {
//         id: uuidv4(),
//         todo: req.body.todo,
//         done: "true"
        
//     }
//      todos.push(newTodo);
//      res.json(todos);
//     }


  
// })

// router.put('/update-todo/:id', (req, res)=>{
//     const id = req.params.id;
//     const todo = req.body.todo;

//     const foundTodo = todos.find(item=>item.id === req.params.id);
//     foundTodo.todo = todo;
//     res.json(todos);
// })

// router.delete('/delete-todo', (req,res)=>{
//     const id = req.body.id;
//     const foundIndex = todos.findIndex(item => item.id === id);
//     const removedTodo = todos.splice(foundIndex, 1)
//     //res.json({message: "found index", foundIndex});
//     // mutating splice push pop shift unshift
//     todos.splice(foundIndex, 1);
//     res.json({message: "todos deleted successfully", payload: removedTodo});
// })






// module.exports = router;