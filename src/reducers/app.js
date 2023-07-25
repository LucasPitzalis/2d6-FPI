import { HANDLE_MODAL, SET_MOBILE } from "../actions/app";

const initialState = {
    modal: false,
    isMobile: window.innerWidth < 640,
};
  
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case HANDLE_MODAL: return {...state, modal: action.modal};
        case SET_MOBILE: return {...state, isMobile: action.value};
        default: return state;
    }
};

export default reducer;
