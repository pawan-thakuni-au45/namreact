const { createSlice } = require("@reduxjs/toolkit");

//how we will create cartSLICE
//1-I WILL DO A CREATEsLICE,THIS CREATESLICE WILL TAKE A CONFIG,THIS CONFIG THIS CONFIG WILL HAVE A NAME,AND INITIALSTATE,THIS INITIALSTATE WILL TAKE AN AN OBJECT,THIS HAS CART ITEMS,INITILY I AM GIVING IT AN WMPTY ARRRAY
//THENM WE WILL HAV REDUCER IT IS OBJECT,WE CAN TAKE MANY ACTION ON IT,
const cartSlice=createSlice({

    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        //REDUCER FUNCTION
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
        state.items.length=0

        }
    }

    
})

export const {addItem,removeItem,clearCart}=cartSlice.actions
export default cartSlice.reducer