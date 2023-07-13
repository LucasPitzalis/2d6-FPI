// Action type
export const ADD_SPEC_USE = 'ADD_SPEC_USE';
export const ADD_NEW_SPEC = 'ADD_NEW_SPEC';
export const DELETE_SPEC = 'DELETE_SPEC';
export const ADD_NEW_SKILL = 'ADD_NEW_SKILL';
export const DELETE_SKILL = 'DELETE_SKILL';

// Action creator
export const addSpecUse = (target) => {
    return {
        type: ADD_SPEC_USE,
        skillIndex: target.skillIndex,
        specIndex: target.specIndex,
    }
}

export const addNewSpec = (skillIndex) => {
    return {
        type: ADD_NEW_SPEC,
        skillIndex: skillIndex,
    }
}

export const deleteSpec = (target) => {
    return {
        type: DELETE_SPEC,
        skillIndex: target.skillIndex,
        specIndex: target.specIndex,
    }
}

export const addNewSkill = () => {
    return {
        type: ADD_NEW_SKILL,
    }
}

export const deleteSkill = (index) => {
    return {
        type: DELETE_SKILL,
        index: index,
    }
}
