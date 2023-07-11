import { EDIT_FIELD } from "../actions/app";

const initialState = localStorage.getItem('skills') 
    ? JSON.parse(localStorage.getItem('skills')) 
    : [{name: "Compétence test", description: "description", ability1: "str", ability2: "int"}];

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

  