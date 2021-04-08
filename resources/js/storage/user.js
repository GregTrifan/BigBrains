import {createSlice} from "@reduxjs/toolkit";

export const slice = createSlice({
    name:"User",
    initialState: {
        name:false,
    },
    reducers: {
        store: (state,name) => {
            state.name=name.payload;
        },
        leave: state => {
            state.name=false
        }
    }
});

export const selectUser = state => state.user.name;
export const {store,leave}=slice.actions;
export default slice.reducer;
