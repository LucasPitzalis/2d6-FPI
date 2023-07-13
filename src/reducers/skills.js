import { EDIT_FIELD } from "../actions/app";
import { ADD_NEW_SPEC, ADD_SPEC_USE } from "../actions/skills";

const initialState = localStorage.getItem('skills') 
    ? JSON.parse(localStorage.getItem('skills')) 
    : [{name: "Compétence test", description: "description", ability1: "str", ability2: "int", specs: [{name: "particularité 1", bonus: 2, uses: 4}]}];

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
        case ADD_NEW_SPEC: return handleAddNewSpec(state, action.skillIndex)
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
    newState[skillIndex].specs.push({name: "", bonus: 0, uses: 0});
    return newState;
}

export default reducer;

  