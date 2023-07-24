import { CREATE_NEW_CHARACTER, EDIT_FIELD } from "../actions/app";
import { LOAD_SHEET } from "../actions/save";

const newCharacter = {
    name: '',
    area: '',
    order: '',
    publicOpinion: '',
    secretOpinion: '',
    religion: '',
    familyStatus: '',
    familyBackground: '',
    currentStatus: '',
    lifeGoal: '',
    achievement: '',
    failure: '',
    talent: '',
    weakness: '',
};

const initialState = localStorage.getItem('letter') 
    ? JSON.parse(localStorage.getItem('letter')) 
    : newCharacter;
  
const reducer = (state = initialState, action = {}) => {
    // Actions out of switch statement because they have additional conditions
    if (action.type === EDIT_FIELD && action.reducer === 'letter') return {...state, [action.property]: action.value};

    switch (action.type) {
        case LOAD_SHEET: return {...action.sheet.letter};
        case CREATE_NEW_CHARACTER: return {...newCharacter};
        default: return state;
    }
};

export default reducer;

