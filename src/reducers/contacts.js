import { EDIT_FIELD } from "../actions/app";

const initialState = localStorage.getItem('contacts') 
    ? JSON.parse(localStorage.getItem('contacts')) 
    : { list: [
            {id: 1, type: 'relative', name: 'foufou', function: 'soeur', aptitudes: 'MI !!', conditions: 'la caliner'},
            {id: 2, type: 'relative', name: 'foufies', function: 'soeur', aptitudes: 'MI !!', conditions: 'la caliner'},
        ],
    };
  
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case EDIT_FIELD: 
            if (action.reducer === 'contacts') {
                return {...state, [action.property]: action.value}
            }
            break;
        default: return state;
    }
};

export default reducer;

  