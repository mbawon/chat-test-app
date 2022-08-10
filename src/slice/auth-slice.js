import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: ""
    },
    reducers: {
        login: (state,actions) => {
            state.user = actions.payload
        }
    }
})

export const { login } = authSlice.actions

export const selectUser = (state) => state.auth.user

export default authSlice.reducer