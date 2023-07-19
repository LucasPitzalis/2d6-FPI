import { EDIT_EXPERIENCE, EDIT_ABILITIES } from "../actions/character";
import { CREATE_NEW_CHARACTER, EDIT_FIELD } from "../actions/app";
import { LOAD_SHEET } from "../actions/save";

const newCharacter = {
    name: '',
    avatar: '',
    age: '',
    height: '',
    weight: '',
    job1: '',
    job2: '',
    difficulty1: '',
    difficulty2: '',
    order: '',
    religion: '',
    experience: 0,
    physicalCondition: '',
    physicalConsequences: '',
    mentalCondition: '',
    mentalConsequences: '',
    abilities: {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
    },
    healthPoints: 0,
    energyPoints: 0,
    wantedIndex: 0,
};

const initialState = localStorage.getItem('character') 
    ? JSON.parse(localStorage.getItem('character')) 
    : newCharacter;
  
const reducer = (state = initialState, action = {}) => {
    // Actions out of switch statement because they have additional conditions
    if (action.type === EDIT_FIELD && action.reducer === 'character') return {...state, [action.property]: action.value};

    switch (action.type) {
        case EDIT_EXPERIENCE: return {...state, experience: action.experience};
        case EDIT_ABILITIES: return {
            ...state, abilities: action.abilities, 
            healthPoints: Math.min(action.abilities.con * 10, state.healthPoints),
            energyPoints: Math.min(action.abilities.wis * 10, state.energyPoints),
        };
        case LOAD_SHEET: return {...action.sheet.character};
        case CREATE_NEW_CHARACTER: return {...newCharacter};
        default: return state;
    }
};

export default reducer;

  