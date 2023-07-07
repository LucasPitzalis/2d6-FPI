// Action type
export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

// Action creator
export const addContact = (list) => {
    return {
        type: ADD_CONTACT,
        list: list,
    }
}

export const deleteContact = (list, id) => {
    return {
        type: DELETE_CONTACT,
        target: {list: list, id: id},
    }
}