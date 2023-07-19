import {createSlice} from '@reduxjs/toolkit'
//import type {PayLoadAction} from '@reduxjs/toolkit'
export const todoSlice=createSlice({
    name:'todo',
    initialState:[{id:1, title:'laundry', completed:false}],
    //reducers responds to actions, it takes the current state and creates new state based on the action payload.
    reducers:{
        //takes current state 
        //addtodo reducers, state-> is current state of slice, action->contains type and payload that comes from our components.
        //anytime we call addTodo from our components addTodo reducer will handle the action.
        addTodo:(state, action)=>{
            //logic to add
            const newTodo={ 
                id:Date.now(),
                title:action.payload.title,
                completed:false,
            }
            state.push(newTodo)

            } 
        

    }
})
export const {addTodo}=todoSlice.actions//get actions or action creaters
export default todoSlice.reducer//add it to store