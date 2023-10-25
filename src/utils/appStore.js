
// import { useReducer } from 'react';
import cartReducer from './cartSlice'
const { configureStore } = require("@reduxjs/toolkit");


const appStore=configureStore({
//reducer is used to modified our store
//this reducer is a big reducer for our whole app
//this is the one big reducer and it can contain multiple reducers
    reducer:{

          cart:cartReducer
        //   user:useReducer
    }
})

export default appStore