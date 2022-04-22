import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({

    name: "user",
    initialState: {

        // user: null,
        name: "",
        email: "",
        password: "",
    },
    reducers: {

        login: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;

        }
        , logout: (state) => {
            state.name = null;
            state.email = null;
            state.password = null;
        }, signUp: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
        }

    }

});

export const { login, logout, si } = userSlice.actions;
export const selectUser = (state) => state.user.name;
export default userSlice.reducer;