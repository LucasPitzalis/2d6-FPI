// Action type
export const EDIT_SHEET = 'EDIT_SHEET';

// Action creator
export const editSheet = (target, reducer) => {
    return {
        type: EDIT_SHEET,
        reducer: reducer,
        prop: target.name,
        value: target.value,
    };
}