import {createSlice} from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        productAdded: (products, action)=>{
            products.push({
                id: ++lastId,
                name: action.payload.name
            })
        }
    }
});

export const {productAdded} = slice.actions;
export default slice.reducer;