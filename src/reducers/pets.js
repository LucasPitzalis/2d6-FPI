import { CREATE_NEW_CHARACTER, EDIT_FIELD } from "../actions/app";
import { ADD_NEW_PET, DELETE_PET, EDIT_PET_EXPERIENCE, EDIT_PET_ROLLS } from "../actions/pets";

import { LOAD_SHEET } from "../actions/save";
import { getLevel } from "../data/levels";
import { removeIndex } from "../utils/functions";

const initialState = localStorage.getItem('pets') 
    ? JSON.parse(localStorage.getItem('pets')) 
    : [];

const newPet = { 
    name: '', experience: 0,
    healthPts: 0, energyPts: 0,
    stats: {
        atk: 0,
        def: 0,
        wil: 0,
        spe: 0,
        maxHp: 0,
        maxEp: 0,
    },
    atkDesc: '',
    defDesc: '',
    wilDesc: '',
    speDesc: '',
    talent: '',
    weakness: '',
    desc: '',
    avatar: '',
    levelRolls: [],
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
        case DELETE_PET: return removeIndex(state, action.index);
        case EDIT_PET_EXPERIENCE: return handleEditPetExperience(state, action.petIndex, action.experience);
        case EDIT_PET_ROLLS: return handleEditPetRolls(state, action.petIndex, action.rolls);
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

    if(getLevel(experience, true).level < state[petIndex].levelRolls.length) {
        newState[petIndex].levelRolls = state[petIndex].levelRolls.slice(0, getLevel(experience, true).level);
    }

    return newState;
}

function handleEditPetRolls(state, petIndex, rolls) {
    const newState = [...state];
    newState[petIndex].levelRolls = rolls;

    return newState;
}

export default reducer;

  