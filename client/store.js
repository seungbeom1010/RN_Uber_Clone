import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlices";

// configureStore = 모듈 보관할 store 생성
// reducer 

export const store = configureStore({
        reducer:{
            nav: navReducer,
        }
});