import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async (_, { getState }) => {
    const state = getState();
    const selectedRegion = state.inputValue.selectedRegion;
    const searchValue = state.inputValue.searchValue;
    console.log(searchValue);

    const res = await fetch(
      "https://raw.githubusercontent.com/abhi-zero/countries-api/refs/heads/main/db.json"
    );
    const data = await res.json();

    return data.filter((country) => {
      if (searchValue) {
        return country.name.toLowerCase().includes(searchValue);
      } else if (selectedRegion !== "all") {
        return country.region === selectedRegion;
      } else {
        return true;
      }
    });
  }
);

const initialState = {
  allCountries: [],
  status: "idle",
  error: null,
};

export const countriesSLice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "successed";
        state.allCountries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default countriesSLice.reducer;
