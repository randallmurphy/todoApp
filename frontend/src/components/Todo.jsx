import React, { useState } from 'react';
import { ListItem, Checkbox, IconButton, TextField, Box, Paper, Typography } from '@mui/material';
import { Edit, Delete, Check } from '@mui/icons-material';

const Todo = ({ todo, handleEditTodo, handleDeleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(todo.text);

  return (
    <Paper 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        p: 1, 
        mb: 1, 
        borderRadius: 2,
        bgcolor: todo.isDone ? '#777' : '#fff',
        color: todo.isDone ? '#eee' : '#000'
      }} 
      elevation={4}
    >
      {!isEditing ? (
        <Box display="flex" alignItems="center" flex={1} onClick={() => handleEditTodo(todo._id, { isDone: !todo.isDone })}>
          <Checkbox checked={todo.isDone} />
          <Typography sx={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
            {todo.text}
          </Typography>
        </Box>
      ) : (
        <TextField
          fullWidth
          value={editInput}
          onChange={e => setEditInput(e.target.value)}
          sx={{ mr: 1 }}
        />
      )}

      {!isEditing ? (
        <IconButton onClick={() => setIsEditing(true)} color="primary">
          <Edit />
        </IconButton>
      ) : (
        <IconButton onClick={() => { handleEditTodo(todo._id, { text: editInput }); setIsEditing(false); }} color="success">
          <Check />
        </IconButton>
      )}

      <IconButton onClick={() => handleDeleteTodo(todo._id)} color="error">
        <Delete />
      </IconButton>
    </Paper>
  )
}

export default Todo;
