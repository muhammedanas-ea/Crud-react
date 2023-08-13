import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    id:'',
    name:'',
    number:'',
    email:'',
    is_admin:''
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserDetails:(state,action)=>{
            state.id= action.payload.id;
            state.name= action.payload.name;
            state.number= action.payload.number;
            state.email= action.payload.email;
        },
    }
})

export const {setUserDetails}= userSlice.actions;
export default userSlice.reducer;