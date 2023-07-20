import React, { ChangeEvent,FormEvent,useState } from 'react'
import { motion } from 'framer-motion'

import { useDispatch } from "react-redux";

import {
  ITodo,
  addTodo,
  updateTodo,
  deleteTodo,
  toggleComplete,
} from "../redux/todoSlice";

const Form = () => {
  const dispatch = useDispatch();

  const todo = useSelector((state: RootState) => state.todo.todos);

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
   
    
    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        if(editedId){
            dispatch(updateTodo({
                id:editedId,
                title:input,

            }))
            setEditedId(null)
            setInput('')
        }else{
            addTask()
            setInput('')
        }
        
       
    }
  return (
   <>
   <div className='flex flex-col justify-center items-center h-screen border-l-2 border-r-2 bg-white bg-opacity-60 backdrop-blur-lg w-[50%]'>
  <motion.div className='flex flex-col justify-center items-center' initial={{y:-500}}
      animate={{y:0}}
      transition={{duration:1, delay:0.3}}>
        
   <h1 className='mb-1 text-3xl font-medium'>TodoWorx</h1>
   <p className='text-xl'>Simplify Your Productivity</p>

   <form onSubmit={handleSubmit} className='w-96 flex  h-auto mt-8'>
    <input className='p-1 backdrop-blur-md outline-none border-2 border-slate-500 text-black w-full rounded-md bg-transparent mr-6 ' type='text' placeholder='Add New Task.....' onChange={handleInput} value={input}></input>
    <button className='border-2 p-1 rounded-md hover:scale-110 w-24 border-slate-500 backdrop-blur-md ' type='submit'>{editedId?'Update':'Add'}</button>
   
    </form>
   <div className='flex flex-col  mt-8'>
    {  todo.map((item:ITodo)=>(
      <div key={item.id} className='flex justify-between w-96 border-2 border-slate-500 rounded-md mt-2 p-2 backdrop-blur-md'>
        <ul className={`${item.completed?'line-through':''}`}>
       
        <li>{item.title}</li>
        <li>{item.completed}</li>
      
        </ul>
        <div className='flex w-44 justify-around items-center  '>
        <input type='checkbox' onChange={()=>handleToogle(item.id)} checked={item.completed} ></input>
         <button onClick={()=>handleDelete(item.id)}>Delete</button>
         <button onClick={()=>handleEdit(item)}>Edit</button>
         </div>
        </div>
         ))}
        
         </div>
        

         
         </motion.div>
         </div>
   </>
  )
}

export default form
