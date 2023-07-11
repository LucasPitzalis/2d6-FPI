import { EDIT_FIELD } from "../actions/app";
import { ADD_CONTACT, DELETE_CONTACT } from "../actions/contacts";
import { removeByIndex } from "../utils/functions";

const initialState = localStorage.getItem('contacts') 
    ? JSON.parse(localStorage.getItem('contacts')) 
    : { relatives: [],
        friends: [],
        enemies: [],
    };
  
const reducer = (state = initialState, action = {}) => {
    // Actions out of switch statement because they have additional conditions
    if (action.type === EDIT_FIELD && action.reducer === 'contacts') {
        const [list, index, property] = action.property.split('.');
        const newList = [...state[list]];
        newList[index] = {...state[list][index], [property]: action.value};
        return {...state, [list]: newList};
    }

    switch (action.type) {
        case DELETE_CONTACT: return {...state, [action.target.list]: removeByIndex(state[action.target.list], action.target.index)};
        case ADD_CONTACT: return {...state, [action.list]: [...state[action.list], {name: '', function: '', aptitudes: '', conditions: ''}]};
        default: return state;
    }
};

export default reducer;

  