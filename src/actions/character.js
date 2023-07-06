// Action type

export const EDIT_EXPERIENCE = 'EDIT_EXPERIENCE';
export const EDIT_ABILITIES = 'EDIT_ABILITIES';

// Action creator
export const editExperience = (newXp) => {
    return {
        type: EDIT_EXPERIENCE,
        experience: newXp,
    };
}

export const editAbilities = (newAbilities) => {
    return {
        type: EDIT_ABILITIES,
        abilities: newAbilities,
    }
}