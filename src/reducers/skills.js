import { EDIT_FIELD } from "../actions/app";
import { generateId } from "../utils/functions";

const initialState = localStorage.getItem('contacts') 
    ? JSON.parse(localStorage.getItem('contacts')) 
    : [];

const reducer = (state = initialState, action = {}) => {
    // Actions out of switch statement because they have additional conditions
    if (action.type === EDIT_FIELD && action.reducer === 'skills') {
        console.log("EDIT_FIELD for skills")
    }

    switch (action.type) {

        default: return state;
    }
};

export default reducer;

  