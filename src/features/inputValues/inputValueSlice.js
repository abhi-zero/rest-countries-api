import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedRegion : localStorage.getItem('selectedRegion') || "all",
    searchValue : null,
}


export const inputValueSlice = createSlice({
    name:"inputValue",
    initialState,
    reducers : {
        valueFromSelect : (state, action) => {
            state.selectedRegion = action.payload
            localStorage.setItem('selectedRegion', action.payload)
        },
        valueFromSearch : (state, action) => {
            state.searchValue = action.payload
        }
    }
})

export const {valueFromSelect, valueFromSearch} = inputValueSlice.actions;

export default inputValueSlice.reducer;