import { toast } from 'react-toastify';
import { setExportBlobUrl } from '../actions/app';
import { EXPORT_SHEET, IMPORT_SHEET, loadSheet } from '../actions/save';
import { generateSheetFileName } from '../utils/functions';

const saveMiddleware = (store) => (next) => (action) => {
    async function saveSheet() {
        const sheet = new Blob([JSON.stringify({
            character: store.getState().character,
            skills: store.getState().skills,
            items: store.getState().items,
            pets: store.getState().pets,
            contacts: store.getState().contacts,
            letter: store.getState().letter,
        }, null, 2)], { type: 'application/json' });
        
        try {
            if(window.showSaveFilePicker) {
                const handle = await window.showSaveFilePicker({
                    types: [{
                        description: '.json character sheet',
                        accept: {'application/json': ['.json']},
                    }],
                    suggestedName: generateSheetFileName(store.getState().character.name),
                });
                const writable = await handle.createWritable();
                await writable.write( sheet );
                writable.close();
            } else {
                store.dispatch(setExportBlobUrl(URL.createObjectURL(sheet)));
            }
            toast.success('Exportation réussie !');
        }
        catch (error) {
            if (error.name === 'AbortError') return;
            toast.error('Erreur lors de l\'exportation');
        }
    }

    async function importSheet(pFile) {
        try {
            let file;
            if(window.showOpenFilePicker) {
                const [fileHandle] = await window.showOpenFilePicker();
                file = await fileHandle.getFile();
            } else file = pFile;
            const sheet = JSON.parse(await file.text());

            store.dispatch(loadSheet(sheet));
            toast.success('Importation réussie !');
        } catch (error) {
            if (error.name === 'AbortError') return;
            toast.error('Erreur lors de l\'importation');
        }
    }

    switch (action.type) {
        case EXPORT_SHEET:
            saveSheet();
            break;
        case IMPORT_SHEET:
            importSheet(action.file);
            break;
        default:
    }
    next(action);
};

export default saveMiddleware;