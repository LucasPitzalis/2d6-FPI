// Action type
export const ADD_NEW_PET = 'ADD_NEW_PET';
export const DELETE_PET = 'DELETE_PET';
export const EDIT_PET_EXPERIENCE = 'EDIT_PET_EXPERIENCE';
export const EDIT_PET_ROLLS = 'EDIT_PET_ROLLS';

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

export const editPetExperience = (newXp, index) => {
    return {
        type: EDIT_PET_EXPERIENCE,
        petIndex: index,
        experience: newXp,
    };
}

export const editPetRolls = (rolls, index) => {
    return {
        type: EDIT_PET_ROLLS,
        petIndex: index,
        rolls: rolls,
    }
}
