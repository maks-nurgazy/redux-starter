import {createAction, createReducer} from '@reduxjs/toolkit';


export const bugAdded = createAction('bugAddeda');
export const bugResolved = createAction('bugResolved');
export const bugRemoved = createAction('bugRemoved');


// Reducer
let lastId = 0;

export default createReducer([], {

    [bugAdded.type] : (bugs,action) =>{
        bugs.push({
            id: ++lastId,
                description: action.payload.description,
                resolved: false
        });
    },
    [bugResolved.type] : (bugs, action) => {
        const index = bugs.findIndex(bug=>bug.id === action.payload.id);
        bugs[index].resolved = true;
    },
    [bugRemoved.type] : (bugs, action) => {
        bugs = bugs.filter(bug=>bug.id !==action.payload.id);
    }
});