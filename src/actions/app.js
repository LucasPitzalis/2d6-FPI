// Action type
export const HANDLE_MODAL = 'HANDLE_MODAL';
export const EDIT_FIELD = 'EDIT_FIELD';
export const CREATE_NEW_CHARACTER = 'CREATE_NEW_CHARACTER';
export const SET_MOBILE = 'SET_MOBILE';

export const setMobile = (value) => {
    return {
        type: SET_MOBILE,
        value: value,
    }
}

export const createNewCharacter = () => {
    return {
        type: CREATE_NEW_CHARACTER,
    }
}

export const SET_EXPORT_BLOB_URL = 'SET_EXPORT_BLOB_URL';

// Action creator
export const handleModal = (value) => {
    return {
        type: HANDLE_MODAL,
        modal: value,
    };
}

export const editField = (target) => {
    const reducerIndex = target.name.indexOf(".");

    return {
        type: EDIT_FIELD,
        reducer: target.name.slice(0, reducerIndex),
        property: target.name.slice(reducerIndex + 1),
        value: target.value,
    };
}

export const setExportBlobUrl = (url) => {
    return {
        type: SET_EXPORT_BLOB_URL,
        url: url,
    }
}