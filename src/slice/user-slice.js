import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: []
    },
    reducers: {
        addUser: (state,actions) => {
            state.users = [...state.users,actions.payload]
        }
    }
})

export const { addUser } = userSlice.actions

export const selectUsers = (state) => state.user.users

export default userSlice.reducer