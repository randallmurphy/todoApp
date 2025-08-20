import React, { useEffect, useState } from 'react';
import { Box, TextField, Button, List, ListItem, IconButton, Checkbox, InputAdornment } from '@mui/material';
import { Edit, Delete, Check } from '@mui/icons-material';
import Todo from './Todo';
import axios from 'axios';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    async function getAllTodos() {
      try {
        const response = await axios.get(`${import.meta.env.DEV ? 'http://localhost:3000' : ''}/api/todo/get-all-todos`);
        setTodoList(response.data.payload);
      } catch (error) {
        console.log(error);
      }
    }
    getAllTodos();
  }, []);

  async function handleEditTodo(_id, updateObj) {
    try {
      const response = await axios.put(`${import.meta.env.DEV ? 'http://localhost:3000' : ''}/api/todo/update-todo/${_id}`, updateObj);
      const newList = todoList.map(item => item._id === _id ? response.data.payload : item);
      setTodoList(newList);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteTodo(id) {
    try {
      await axios.delete(`${import.meta.env.DEV ? 'http://localhost:3000' : ''}/api/todo/delete-todo/${id}`);
      setTodoList(todoList.filter(item => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  async function addTodo(event) {
    event.preventDefault();
    if (!textInput) return;
    try {
      const response = await axios.post(`${import.meta.env.DEV ? 'http://localhost:3000' : ''}/api/todo/create-todo`, { text: textInput });
      setTodoList([...todoList, response.data.payload]);
      setTextInput("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box>
      <Box component="form" onSubmit={addTodo} display="flex" mb={3}>
        <TextField
          variant="outlined"
          placeholder="Add a new todo..."
          value={textInput}
          onChange={e => setTextInput(e.target.value)}
          fullWidth
          sx={{ bgcolor: '#c08feeff', borderRadius: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button type="submit" variant="contained" sx={{ bgcolor: '#6a11cb', '&:hover': { bgcolor: '#2575fc' } }}>
                  Add
                </Button>
              </InputAdornment>
            )
          }}
        />
      </Box>
      <List>
        {todoList.map(todo => (
          <Todo
            key={todo._id}
            todo={todo}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </List>
    </Box>
  )
};

export default TodoList;
