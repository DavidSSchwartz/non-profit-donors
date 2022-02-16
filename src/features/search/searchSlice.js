import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'search',
    initialState: {
        value: ''
    },
    reducers: {
        setSearchQuery: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setSearchQuery } = slice.actions;

export const selectSearchQuery = state => state.search.value;

export default slice.reducer;
