// Action type
export const ADD_SPEC_USE = 'ADD_SPEC_USE';

// Action creator
export const addSpecUse = (target) => {
    return {
        type: ADD_SPEC_USE,
        skillIndex: target.skillIndex,
        specIndex: target.specIndex,
    }
}
