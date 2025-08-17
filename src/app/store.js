import {configureStore} from '@reduxjs/toolkit';
import { themeSlice, countriesSLice, inputValueSlice} from '../features';

const store = configureStore({
    reducer:{
        theme: themeSlice,
        countries : countriesSLice,
        inputValue : inputValueSlice
    }
})

export default store;