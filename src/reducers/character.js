import { EDIT_CHAR, EDIT_EXPERIENCE, EDIT_ABILITIES } from "../actions/character";

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
    experience: 0,
};
  
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case EDIT_CHAR: return {...state, [action.property]: action.value};
        case EDIT_EXPERIENCE: return {...state, experience: action.experience};
        case EDIT_ABILITIES: return {...state, abilities: action.abilities};
        default: return state;
    }
};

export default reducer;

  