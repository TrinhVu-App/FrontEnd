import { createSlice } from "@reduxjs/toolkit";
import { ActionSheetIOS } from "react-native";

const initialState = {
    listen: null,
    read: null,
    practice: null
}

export const storySlice = createSlice ({
    name: 'story',
    initialState: initialState,
    reducer: {
        setRead: (state, action) => {
            state.read = action.payload;
        }, 
        setListen: (state, action) => {
            state.listen = action.payload;
        },
        setPractice: (state, action) => {
            state.practice = action.payload
        },
    },
});

export const { setListen, setPractice, setRead }
= storySlice.actions;

export const selectListen = (state) => state.story.listen;
export const selectPractice = (state) => state.story.practice;
export const selectRead  = (state) => state.story.read;

export default storySlice.reducer; 