// Action type
export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

// Action creator
export const addContact = () => {

}

export const deleteContact = (list, id) => {
    return {
        type: DELETE_CONTACT,
        target: {list: list, id: id},
    }
}