import { EDIT_CHAR } from "../actions/character";

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
    },
    healthPoints: 0,
    energyPoints: 0,
};
  
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case EDIT_CHAR: return {...state, [action.property]: action.value};
        default: return state;
    }
};

export default reducer;

  