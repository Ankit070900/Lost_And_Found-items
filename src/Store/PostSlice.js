import { createSlice} from '@reduxjs/toolkit'



const postSlice = createSlice({
    name : "post",
    initialState : {},
    reducers:{
        addPost:(state,action)=>{
            state.push(action.payload)
        }
    }
});


export const postActions = postSlice.actions;

export default postSlice;