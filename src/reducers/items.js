import { CREATE_NEW_CHARACTER, EDIT_FIELD } from "../actions/app";
import { ADD_NEW_ITEM, DELETE_ITEM } from "../actions/items";
import { LOAD_SHEET } from "../actions/save";
import { removeIndex } from "../utils/functions";

const initialState = localStorage.getItem('items') 
    ? JSON.parse(localStorage.getItem('items')) 
    : [];

const newItem = { name: '', type: '', 
    bonusDesc: '', bonusValue: 0, malusDesc: '', malusValue: 0, 
    resistance: 0, dmg: '', armor: 0,
    reserve: '', reloadPrice: '', kilometers: '',
    quality: "1", price: '', weight: '',
    matType: '', matQty: '',
    bearer: -1, // -1 = character, otherwise number = petIndex
};

const reducer = (state = initialState, action = {}) => {
    // Actions out of switch statement because they have additional conditions
    if (action.type === EDIT_FIELD && action.reducer === 'items') {
        const newState = [...state];
        const [index, property] = action.property.split('.');
        newState[index] = {...newState[index], [property]: action.value};
        return newState;
    }

    switch (action.type) {
        case ADD_NEW_ITEM: return handleAddNewItem(state);
        case DELETE_ITEM: return removeIndex(state, action.index);
        case LOAD_SHEET: return [...action.sheet.items];
        case CREATE_NEW_CHARACTER: return [];
        default: return state;
    }
};

function handleAddNewItem(state) {
    const newState = [...state];
    newState.push({...newItem});
    return newState;
}

export default reducer;

  