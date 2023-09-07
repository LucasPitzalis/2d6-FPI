import { HANDLE_MODAL, SET_EXPORT_BLOB_URL, SET_MOBILE } from "../actions/app";

const initialState = {
    modal: false,
    isMobile: window.innerWidth < 400,
    exportBlobUrl: null,
};
  
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case HANDLE_MODAL: return {...state, modal: action.modal};
        case SET_MOBILE: return {...state, isMobile: action.value};
        case SET_EXPORT_BLOB_URL: return {...state, exportBlobUrl: action.url};
        default: return state;
    }
};

export default reducer;
