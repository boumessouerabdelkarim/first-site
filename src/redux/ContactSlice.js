import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  msgList: [
   ]}


export const ContactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addMsg: (state,action) => {
     state.msgList.push(action.payload);
     console.log(state)
    }}})
    export const { addMsg } = ContactSlice.actions

export default ContactSlice.reducer