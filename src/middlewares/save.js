import { toast } from "react-toastify";
import { EXPORT_SHEET, IMPORT_SHEET, loadSheet } from "../actions/save";

const saveMiddleware = (store) => (next) => (action) => {
    async function saveSheet() {
        const sheet = new Blob([JSON.stringify({
            character: store.getState().character,
            skills: store.getState().skills,
            contacts: store.getState().contacts,
        }, null, 2)], { type: 'application/json' });
        
        try {
            const handle = await window.showSaveFilePicker({
                types: [{
                    description: '.json character sheet',
                    accept: {'application/json': ['.json']},
                }],
                suggestedName: store.getState().character.name !== '' ? store.getState().character.name.replace(/[^a-z0-9]/gi, '_') + '.json' : 'perso2d6.json',
              });
            const writable = await handle.createWritable();
            await writable.write( sheet );
            writable.close();
            toast.success("Exportation réussie !");
        }
        catch (error) {
            toast.error("Erreur lors de l'exportation");
        }
    }

    async function importSheet() {
        try {
            const [fileHandle] = await window.showOpenFilePicker();
            const file = await fileHandle.getFile();
            const sheet = JSON.parse(await file.text());

            store.dispatch(loadSheet(sheet));
            toast.success("Importation réussie !");
        } catch (error) {
            toast.error("Erreur lors de l'importation");
        }
    }

    switch (action.type) {
        case EXPORT_SHEET:
            saveSheet();
            break;
        case IMPORT_SHEET:
            importSheet();
            break;
        default:
    }
    next(action);
};

export default saveMiddleware;