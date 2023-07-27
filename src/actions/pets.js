// Action type
export const ADD_NEW_PET = 'ADD_NEW_PET';
export const DELETE_PET = 'DELETE_PET';

// Action creator
export const addNewPet = () => {
    return {
        type: ADD_NEW_PET,
    }
}

export const deletePet = (index) => {
    return {
        type: DELETE_PET,
        index: index,
    }
}
