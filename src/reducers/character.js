import { EDIT_SHEET } from "../actions/sheet";

const initialState = {
    name: '',
    age: null,
    abilities: {
        str: 1,
        dex: 1,
        con: 1,
        int: 2,
        wis: 1,
        cha: 1,
    }
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

  