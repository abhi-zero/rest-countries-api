import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme : localStorage.getItem('theme') || "light",
}

export const themeSlice = createSlice({
    name : 'theme',
    initialState,
    reducers:{
        toggleTheme : (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
            localStorage.setItem('theme', state.theme);
            document.querySelector('html').classList.remove("dark","light");
            document.querySelector('html').classList.add(state.theme);
        }
    }
})

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;