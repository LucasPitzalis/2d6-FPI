// Action type
export const EDIT_SHEET = 'EDIT_SHEET';

// Action creator
export const editSheet = (target) => {
    const nameSplit = target.name.split(".");

    return {
        type: EDIT_SHEET,
        reducer: nameSplit[0],
        prop: nameSplit.pop(),
        value: target.value,
    };
}