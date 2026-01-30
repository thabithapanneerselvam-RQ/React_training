import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        search: ""
    },
    reducers: {
        setSearch(state, action){
            state.search=action.payload;
        }
    }

})

export const {setSearch} = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;