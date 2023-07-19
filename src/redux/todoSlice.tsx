import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
export interface ITodo{
    id:number,
    title:string,
    completed:boolean,
}
export interface ITodos{
    todos:ITodo[]
}
const initialState:ITodos={
    todos:[]
}


export const todoSlice=createSlice({
    name:'todo',
    initialState,
    //reducers responds to actions, it takes the current state and creates new state based on the action payload.
    reducers:{
        //takes current state 
        //addtodo reducers, state-> is current state of slice, action->contains type and payload that comes from our components.
        //anytime we call addTodo from our components addTodo reducer will handle the action.
        addTodo:(state, action:PayloadAction<string>)=>{
            //logic to add
           const newTodo:ITodo={
            id:Date.now(),
            title:action.payload,
            completed:false,
           }
            state.todos.push(newTodo)

            },
            toggleComplete:(state, action:PayloadAction<number>)=>{
                const index=state.todos.find((item)=>item.id===action.payload)
                if(index){
                    index.completed=!index.completed
                }


            },
            deleteTodo:(state,action:PayloadAction<number>)=>{
               state.todos= state.todos.filter((item)=>item.id!=action.payload)

            },
            updateTodo:(state, action:PayloadAction<{id:number, title:string}>)=>{
                const index=state.todos.find((item)=>item.id===action.payload.id)
                if(index){
                    index.title=action.payload.title
                }

            }
        

    }
})
export const {addTodo,toggleComplete, deleteTodo, updateTodo}=todoSlice.actions//get actions or action creaters
export default todoSlice.reducer//add it to store