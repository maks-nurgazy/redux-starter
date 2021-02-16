import { createSlice} from '@reduxjs/toolkit';
import {createSelector } from 'reselect';

let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        bugAdded: (bugs,action) => {
            bugs.push({
                id: ++lastId,
                    description: action.payload.description,
                    resolved: false
            });
        },

        bugResolved : (bugs, action) => {
            const index = bugs.findIndex(bug=>bug.id === action.payload.id);
            bugs[index].resolved = true;
        },
        bugRemoved : (bugs, action) => {
            bugs = bugs.filter(bug=>bug.id !==action.payload.id);
        },
        assignBugUser: (bugs, action)=>{
            const bugIndex = bugs.findIndex(bug=>bug.id===action.payload.bugId);
            bugs[bugIndex].user = action.payload.userId;
        }

    }
});


export const {bugAdded,bugRemoved,bugResolved,assignBugUser} = slice.actions;
export default slice.reducer;


export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    state => state.entities.projects,
    bugs => bugs.filter(bug=> !bug.resolved)
);

export const getUserBugs=(userId)=> createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug=> bug.user === userId)
);