// Action type
export const EDIT_CHAR = 'EDIT_CHAR';

// Action creator
export const editChar = (target) => {
    return {
        type: EDIT_CHAR,
        property: target.name,
        value: target.value,
    };
}