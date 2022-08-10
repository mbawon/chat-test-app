import { createSlice } from "@reduxjs/toolkit"

const messageSlice = createSlice({
    name: "message",
    initialState: {
        messages: [], // all messages are stored here(This could be a db)
        paginated:[] // All needed messages are stored here
    },
    reducers: {
        addMessage: (state,actions) => {
            state.messages = [...state.messages,actions.payload]
            state.paginated = [...state.paginated,actions.payload] //This will ensure that the already paginated messages up to date
        },
        getMessages:(state,actions) => {
            state.paginated = [...state.messages.slice(0-actions.payload)] //The page size is negated to pick the last 25 messages 
        }
    }
})

export const { addMessage, getMessages } = messageSlice.actions // actions exported

export const selectPaginated = (state) => state.message.paginated; // getting all paginated messages

export default messageSlice.reducer