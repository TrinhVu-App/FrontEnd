import { configureStore } from "@reduxjs/toolkit";
import storyReducer from "./slices/storySlice";

export const store = configureStore({
    reducer: {
        story: storyReducer,
    }
})