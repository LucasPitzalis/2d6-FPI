// Action type
export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

// Action creator
export const addNewItem = () => {
    return {
        type: ADD_NEW_ITEM,
    }
}

export const deleteItem = (index) => {
    return {
        type: DELETE_ITEM,
        index: index,
    }
}
