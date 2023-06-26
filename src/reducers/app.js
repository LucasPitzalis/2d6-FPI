import { HANDLE_MODAL } from "../actions/app";

const initialState = {
    modal: false,
};
  
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case HANDLE_MODAL: return {...state, modal: action.modal};
        default: return state;
    }
};

export default reducer;
