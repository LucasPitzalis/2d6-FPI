import { CREATE_NEW_CHARACTER, EDIT_FIELD } from "../actions/app";
import { LOAD_SHEET } from "../actions/save";
import { ADD_NEW_SKILL, ADD_NEW_SPEC, ADD_SPEC_USE, DELETE_SKILL, DELETE_SPEC } from "../actions/skills";
import { currentLevel } from "../features/characterStats";
import { removeIndex } from "../utils/functions";

const initialState = localStorage.getItem('skills') 
    ? JSON.parse(localStorage.getItem('skills')) 
    : [];

const newSkill = {name: '', description: '', ability1: 'str', ability2: 'con', specs: []};
const newSpec = {name: '', bonus: 0, uses: 0};

const reducer = (state = initialState, action = {}) => {
    // Actions out of switch statement because they have additional conditions
    if (action.type === EDIT_FIELD && action.reducer === 'skills') {
        const newState = [...state];
        const [index, property, specIndex, specProperty] = action.property.split('.');
        if (property === 'specs') {
            const newSpecs = [...state[index].specs];
            newSpecs[specIndex] = {...state[index].specs[specIndex], [specProperty]: action.value};
            newState[index] = {...newState[index], specs: newSpecs};
        }
        else newState[index] = {...newState[index], [property]: action.value};
        return newState;
    }

    switch (action.type) {
        case ADD_SPEC_USE: return handleAddSpecUse(state, action);
        case ADD_NEW_SPEC: return handleAddNewSpec(state, action.skillIndex);
        case ADD_NEW_SKILL: return handleAddNewSkill(state);
        case DELETE_SKILL: return removeIndex(state, action.index);
        case DELETE_SPEC: return handleDeleteSpec(state, action.skillIndex, action.specIndex);
        case LOAD_SHEET: return [...action.sheet.skills];
        case CREATE_NEW_CHARACTER: return [];
        default: return state;
    }
};

function handleAddSpecUse(state, action) {
    const { bonus, uses } = state[action.skillIndex].specs[action.specIndex];
    if (bonus >= 7) return state;

    const newState = [...state];
    const newSpecs = [...state[action.skillIndex].specs];
    newSpecs[action.specIndex] = {...state[action.skillIndex].specs[action.specIndex], uses: uses < 4 ? uses + 1 : 0, bonus: uses < 4 ? bonus : bonus + 1};
    newState[action.skillIndex] = {...state[action.skillIndex], specs: newSpecs};
    return newState;
}

function handleAddNewSpec(state, skillIndex) {
    if (state[skillIndex].specs.length >= 2) return state;

    const newState = [...state];
    const newSpecs = [...state[skillIndex].specs];
    newSpecs.push({...newSpec});
    newState[skillIndex].specs = newSpecs;
    return newState;
}

function handleAddNewSkill(state) {
    if (state.length >= currentLevel().skillPts) return state;

    const newState = [...state];
    newState.push({...newSkill});
    return newState;
}

function handleDeleteSpec(state, skillIndex, specIndex) {
    const newState = [...state];
    newState[skillIndex] = {...state[skillIndex], specs: removeIndex(state[skillIndex].specs, specIndex)};
    return newState;
}

export default reducer;

  