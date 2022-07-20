import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import skillService from "./skillService"

const initialState={
    skills:[],
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:""
}

export const fetchUserSkills = createAsyncThunk("skills/fetchUserSkills", async(_, thunkAPI)=>{
    try {
        return await skillService.fetchUserSkills()
    } catch (error) {
        const message=(error.response&&error.response.data&&error.response.data.message)||error.message||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const skillSlice = createSlice({
    name:"skills",
    initialState,
    reducers:{
        skillReset:(state)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=false
            state.message=""
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchUserSkills.pending, (state)=>{
                state.isLoading=true;
            })
            .addCase(fetchUserSkills.fulfilled, (state,action)=>{
                state.isLoading=false;
                state.isSuccess=true;
                state.skills=action.payload
            })
            .addCase(fetchUserSkills.rejected, (state,action)=>{
                state.isLoading=false;
                state.isError=true;
                state.isSuccess=false;
                state.message=action.payload;
                state.skills=null
            })
    }
})

export const {skillReset}=skillSlice.actions
export default skillSlice.reducer