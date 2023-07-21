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


export const todoSlice=createSlice({ //slice contains logic for managing state, combines definition of actions and reducers.
    name:'todo', //name of slice
    initialState,//initial state for slice
    //reducers responds to actions, it takes the current state and creates new state based on the action payload.
    reducers:{
        //takes current state 
        //addtodo reducers, state-> is current state of slice, action->contains type and payload that comes from our components.
        //anytime we call addTodo from our components addTodo reducer will handle the action.
        addTodo:(state, action:PayloadAction<string>)=>{ // payload is a property inside action, PayloadAction has title of newtask as string.
            //logic to add
           const newTodo:ITodo={
            id:Date.now(),
            title:action.payload, //title from action payload which is basically coming from user.
            completed:false, //initially the task is incomplete, so it is set to false.
           }
            state.todos.push(newTodo) // push is a method, the newtasks/todo is added to the state.todos.

            },
            toggleComplete:(state, action:PayloadAction<number>)=>{ //payloadaction takes parameter id from the array that needs to be toogled from the components.
                const index=state.todos.find((item)=>item.id===action.payload) //find is a method that will find the index   
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
 //uuid(package)
            //redux-saga
            //middleware(thunk,saga)-either