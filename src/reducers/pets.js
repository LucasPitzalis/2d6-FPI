import { CREATE_NEW_CHARACTER, EDIT_FIELD } from "../actions/app";
import { ADD_NEW_PET, EDIT_PET_EXPERIENCE } from "../actions/pets";

import { LOAD_SHEET } from "../actions/save";
import { removeIndex } from "../utils/functions";

const initialState = localStorage.getItem('pets') 
    ? JSON.parse(localStorage.getItem('pets')) 
    : [];

const newPet = { 
    name: '', experience: 0, hpEpPts: 0, skillPts: 0,
    maxHp: 0, maxEp: 0, healthPts: 0, energyPts: 0,
    atkDesc: '', atkValue: 0, 
    defDesc: '', defValue: 0,
    wilDesc: '', wilValue: 0,
    speDesc: '', speValue: 0,
    talent: '',
    weakness: '',
    desc: '',
    avatar: '',
};

const reducer = (state = initialState, action = {}) => {
    // Actions out of switch statement because they have additional conditions
    if (action.type === EDIT_FIELD && action.reducer === 'pets') {
        const newState = [...state];
        const [index, property] = action.property.split('.');
        newState[index] = {...newState[index], [property]: action.value};
        return newState;
    }

    switch (action.type) {
        case ADD_NEW_PET: return handleAddNewPet(state);
        case EDIT_PET_EXPERIENCE: return handleEditPetExperience(state, action.petIndex, action.experience)
        case LOAD_SHEET: return [...action.sheet.items];
        case CREATE_NEW_CHARACTER: return [];
        default: return state;
    }
};

function handleAddNewPet(state) {
    const newState = [...state];
    newState.push({...newPet});
    return newState;
}

function handleEditPetExperience(state, petIndex, experience) {
    const newState = [...state];
    newState[petIndex].experience = experience;

    // TODO rolls ?
    return newState;
}

export default reducer;

  