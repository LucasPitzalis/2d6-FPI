// Action type
export const HANDLE_MODAL = 'HANDLE_MODAL';

// Action creator
export const handleModal = (value) => {
    return {
        type: HANDLE_MODAL,
        modal: value,
    };
}