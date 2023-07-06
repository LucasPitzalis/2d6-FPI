// Action type
export const HANDLE_MODAL = 'HANDLE_MODAL';
export const EDIT_FIELD = 'EDIT_FIELD';

// Action creator
export const handleModal = (value) => {
    return {
        type: HANDLE_MODAL,
        modal: value,
    };
}

export const editField = (target) => {
    const pathSplit = target.name.split(".");

    return {
        type: EDIT_FIELD,
        reducer: pathSplit[0],
        property: pathSplit[1],
        value: target.value,
    };
}