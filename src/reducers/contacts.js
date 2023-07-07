import { EDIT_FIELD } from "../actions/app";

const initialState = localStorage.getItem('contacts') 
    ? JSON.parse(localStorage.getItem('contacts')) 
    : { relative: [
            {id: 0, name: 'foufoum', function: 'soeur', aptitudes: 'MI !!', conditions: 'la caliner'},
            {id: 1, name: 'klu', function: 'soeur', aptitudes: 'MI !!', conditions: 'la caliner'},
            {id: 2, name: 'foufie', function: 'soeur', aptitudes: 'MI !!', conditions: 'la caliner'},
        ],
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
        default: return state;
    }
};

export default reducer;

  