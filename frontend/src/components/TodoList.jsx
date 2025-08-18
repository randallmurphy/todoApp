import React, { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo'
import axios from 'axios';
const todoList = () => {

  // const sampleData = [
  //   {
  //     id: 1,
  //     text: "do laundry",
  //     isDone: false
  //   },
  //   {
  //     id: 2,
  //     text: "walk dog",
  //     isDone: true
  //   },
  //   {
  //     id: 3,
  //     text: "cook dinner",
  //     isDone: false
  //   },
  // ];
  
// react monitors the state for changes then reacts;
const [todoList, setTodoList] = useState([])  //made into a state, anything u want interactive hold in a state or a prop;
        //getter    //change state with setter
const [textInput, setTextInput] = useState("");


useEffect(() => {
  async function getAllTodos(){
    try {
      const response = await axios.get("http://localhost:3000/api/todo/get-all-todos")
      console.log(response.data.payload);
        setTodoList(response.data.payload)
    } catch (error) {
      console.log(error)
    }
  }
  getAllTodos()
  
}, [])//run on component mount whatever state inputed watches and triggers effect on change

  // async function handleChangeIsDone(id, isDone){
  //   try {
  //     const response = await axios.put(`http://localhost:3000/api/todo/update-todo/${id}`)



  //     // make a new list using old list but only changing the object with the id; use map;
  //   console.log("clg") // checking for errors;
  //   const newList=todoList.map(item =>{
  //     if(item.id === id){
  //       item.isDone = !item.isDone;
       
  //     } 
  //     return item;
  //   })
  //   setTodoList(newList)
 
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
    

  async function handleEditTodo(_id, updateObj){ // if changing isDone {isDone: true/false} text change {text: "walk dog"} then update;
    try {
       const response = await axios.put(`http://localhost:3000/api/todo/update-todo/${_id}`, updateObj)
      console.log(response.data.payload);

    const newList = todoList.map(item =>{
      if(item._id === _id){
        item = response.data.payload;
      }
      return item;//push item into new array
      
    })
    setTodoList(newList);
    } catch (error) {
      console.log(error)
    }
   
  }

  async function handleDeleteTodo(id) {
  try {
    const response = await axios.delete(`http://localhost:3000/api/todo/delete-todo/${id}`);
    
    // Log the deleted item or confirmation
     console.log("Deleted:", response.data.payload);

    // Update frontend list by removing the deleted item
    const newList = todoList.filter(item => item._id !== id);
    setTodoList(newList);
    
  } catch (error) {
    console.error("Delete error:", error.message);
  }
}
  // async function handleDeleteTodo(id){
  //   try {
  //     const response = await axios.delete(`http://localhost:3000/api/todo/delete-todo${id}`)
  //     console.log(response.data.payload);
  //     const newList = todoList.filter(item => item._id !== id)
  //     setTodoList(newList)
  //   } catch (error) {
  //     console.log(error)
  //   }
  //   // const newList = todoList.filter( item => {
  //   //   if(item._id !== id)
  //   //   item = response.data.payload;
  //   // //const newList = todoList.map(item => { if(item.id === id){return}else{return item} })
  //   // //
  //   // })
  //   // setTodoList(newList);
  // }


async function addTodo(event){
  try {
    event.preventDefault(); // stops refresh of page;
    if(textInput === ""){
      return
    }
    const response = await axios.post('http://localhost:3000/api/todo/create-todo', {text: textInput}) //req.body is going to be looking for text;
    setTodoList([...todoList, response.data.payload])//payload is our object;
    setTextInput("")
  } catch (error) {
    console.log(error)
  }
}
//   if(textInput === ''){
//     return
//   }
//   // add todo from the textInput react has its own set of rules to add to list, any changes u want seen need to be stated in a state;
//   const newTodo = {
//     id: uuidv4(),
//     text: textInput ,
//     isDone: false
//   }
//   setTodoList([...todoList, newTodo]) // use spread op because we cannot directly mutate the array, can only change state using setter function and spread operator; the react new .push() method;
//   setTextInput("")
// }

  return (
    <div>
      <div className='form-div'>
        <form onSubmit={event => addTodo(event)}>  
          <input 
            type="text" 
            name='todoInput'
            value={textInput}
            onChange={(e)=>{setTextInput(e.target.value)}}  //event => setTextInput(event.target.value);
             />
          <button type="submit" name='submit'>submit</button>
        </form>
      </div>
      <div className='todo-div'>
        <ul>
          {
            todoList.map((todo)=>{
              return (
                <Todo
                 key={todo._id}
                 todo = {todo}
                 //handleChangeIsDone={handleChangeIsDone}
                 handleEditTodo={handleEditTodo}
                 handleDeleteTodo={handleDeleteTodo}
                  />
                
              )
            })
          }
        </ul>
      </div>
    </div>
    //textbox;
    //submit btn;
    //list =>;
    // checkbox for done or line through;
    //.map method used to loop through everything in an array;
  )
}

export default todoList
