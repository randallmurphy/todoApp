const Todo = require('../model/Todo');

const getAllTodos = async(req,res)=>{
    try {
        const todos = await Todo.find({});
        res.status(200).json({message:'todos found.', payload: todos})
    } catch (error) {
        res.status(500).json({message: 'error while fetching todos.', error: error.message})
    }
}
const createTodo = async(req,res)=>{
    try {
        const newTodo = new Todo({
            text: req.body.text
        })
        await newTodo.save();
        res.json({message: 'Todo created.', payload: newTodo});
    } catch (error) {
        res.status(500).json({message: 'error while creating todos.', error: error.message})
    }
}
const updateTodoById = async(req,res)=>{
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json({message: 'Todo updated', payload: updatedTodo})
    } catch (error) {
        res.status(500).json({message: 'error while updating todos.', error: error.message})
    }
}
const deleteTodoById = async(req,res)=>{
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id)
        res.json({message: 'Todo Deleted', payload: deletedTodo})
    } catch (error) {
        res.status(500).json({message: 'error while deleting todos.', error: error.message})
    }
}

module.exports = {
    getAllTodos,
    createTodo,
    updateTodoById,
    deleteTodoById
}



// const Todo = require('../models/Todo');

// async function getAllTodos(req, res) {
//     try {
//         const todos = await Todo.find();
//         res.json({ message: 'Todos fetched', payload: todos });
//     } catch (err) {
//         res.status(500).json({ message: 'Error fetching todos', error: err.message });
//     }
// }

// async function createTodo(req, res) {
//     try {
//         const { todo } = req.body;
//         const newTodo = new Todo({ todo });
//         await newTodo.save();
//         res.json({ message: 'Todo created', payload: newTodo });
//     } catch (err) {
//         res.status(500).json({ message: 'Error creating todo', error: err.message });
//     }
// }

// async function updateTodo(req, res) {
//     try {
//         const { id } = req.params;
//         const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
//         res.json({ message: 'Todo updated', payload: updatedTodo });
//     } catch (err) {
//         res.status(500).json({ message: 'Error updating todo', error: err.message });
//     }
// }

// async function deleteTodo(req, res) {
//     try {
//         const { id } = req.params;
//         const deletedTodo = await Todo.findByIdAndDelete(id);
//         res.json({ message: 'Todo deleted', payload: deletedTodo });
//     } catch (err) {
//         res.status(500).json({ message: 'Error deleting todo', error: err.message });
//     }
// }

// module.exports = {
//     getAllTodos,
//     createTodo,
//     updateTodo,
//     deleteTodo
// };
