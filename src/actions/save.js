export const EXPORT_SHEET = 'EXPORT_SHEET';
export const IMPORT_SHEET = 'IMPORT_SHEET';
export const LOAD_SHEET = 'LOAD_SHEET';

export const loadSheet = (sheet) => {
    return {
        type: LOAD_SHEET,
        sheet: sheet,
    }
}

export const exportSheet = () => {
    return {
        type: EXPORT_SHEET,
    }
}

export const importSheet = () => {
    return {
        type: IMPORT_SHEET,
    }
}