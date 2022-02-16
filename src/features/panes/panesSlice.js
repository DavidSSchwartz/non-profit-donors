import { createSlice } from '@reduxjs/toolkit';
import { dummyData } from '../../app/dummyData';

let listOrderedByRecent = dummyData;
export const slice = createSlice({
    name: 'panes',
    initialState: dummyData,
    reducers: {
        add: (state, action) => {
            state.unshift(action.payload);
            listOrderedByRecent = Object.assign([], listOrderedByRecent);
            listOrderedByRecent.unshift(action.payload);
        },
        sort: (state, action) => {
            switch(action.payload) {
                case 'recent':
                    state.splice(0, state.length, ...listOrderedByRecent);    
                    break;
                case 'alph':
                    state.sort((a, b) => {
                        var nameA = a.name.toUpperCase();
                        var nameB = b.name.toUpperCase();
                        if (nameA < nameB) {
                          return -1;
                        }
                        if (nameA > nameB) {
                          return 1;
                        }
                        return 0;
                    });
                    break;
                case 'highest':
                    state.sort((a, b) => {
                        return b.amount - a.amount;
                    });
                    break;
                case 'lowest':
                    state.sort((a, b) => {
                        return a.amount - b.amount;
                    });
                    break;
                default:
                    break;
            }
        }
    }
})

export const { add, sort } = slice.actions;

export const selectPanes = state => state.panes;

export default slice.reducer;
