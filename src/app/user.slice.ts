import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState={
    search: string
}

const initialState: UserState={
    search: ""
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<string>){
            state.search=action.payload;
        }
    }

})

export const {setSearch} = userSlice.actions;
export default userSlice.reducer;