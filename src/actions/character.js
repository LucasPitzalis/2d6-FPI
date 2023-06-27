// Action type
export const EDIT_CHAR = 'EDIT_CHAR';
export const EDIT_EXPERIENCE = 'EDIT_EXPERIENCE';

// Action creator
export const editChar = (target) => {
    return {
        type: EDIT_CHAR,
        property: target.name,
        value: target.value,
    };
}

export const editExperience = (newXp) => {
    return {
        type: EDIT_EXPERIENCE,
        experience: newXp,
    };
}