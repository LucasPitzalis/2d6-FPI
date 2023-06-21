import { EDIT_SHEET } from "../actions/sheet";

const initialState = {
    name: '',
    age: null,
};
  
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case EDIT_SHEET: 
            if (action.reducer === "character") return {...state, [action.prop]: action.value};
            break;
        default: return state;
    }
};

export default reducer;

  