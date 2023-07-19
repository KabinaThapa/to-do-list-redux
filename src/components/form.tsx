import React, { ChangeEvent,useState } from 'react'


import {useSelector} from 'react-redux'
import { RootState } from '../redux/store'
import {useDispatch} from 'react-redux'
import {toggleComplete, deleteTodo, ITodo,addTodo,updateTodo } from '../redux/todoSlice' 




const form = () => {
    const dispatch=useDispatch()
    const todo=useSelector((state:RootState)=>state.todo.todos)
    
    const[input, setInput]=useState('')
    const[editedId, setEditedId]=useState<number|null>(null)
  
    //inputhandler function
    const handleInput=(event:ChangeEvent<HTMLInputElement>)=>{
        setInput(event.target.value)

    }
   
   
    const handleToogle=(id:number)=>{
        dispatch(toggleComplete(id))
    }
    const handleDelete=(id:number)=>{
        dispatch(deleteTodo(id))
    }
    //addnewtask function
   const addTask=()=>{
    dispatch(addTodo(input))
   }
 
   const handleEdit=(todo:ITodo)=>{
    setInput(todo.title)
    setEditedId(todo.id)
   }
   
    
    const handleSubmit=(event:any)=>{
        event.preventDefault()
        if(editedId){
            dispatch(updateTodo({
                id:editedId,
                title:input,

            }))
            setEditedId(null)
        }else{
            addTask()
            setInput('')
        }
        
       
    }
  return (
   <>
   <form onSubmit={handleSubmit} className='w-96 border-2 mx-auto '>
    <input type='text' placeholder='Add newTask.....' onChange={handleInput} value={input}></input>
    <button type='submit'>{editedId?'Update':'Add'}</button>
   
   </form>
   <div className='flex flex-col justify-center items-center'>
    {  todo.map((item:ITodo)=>(
      <div key={item.id} className='flex justify-around w-96'>
        <ul className='flex list-none '>
       
        <li>{item.title}</li>
        <li>{item.completed}</li>
      
        </ul>
        <input type='checkbox' onChange={()=>handleToogle(item.id)} checked={item.completed} ></input>
         <button onClick={()=>handleDelete(item.id)}>Delete</button>
         <button onClick={()=>handleEdit(item)}>Edit</button>
        </div>
         ))}
        
         </div>


   </>
  )
}

export default form