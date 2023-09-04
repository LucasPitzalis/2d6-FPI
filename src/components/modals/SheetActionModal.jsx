import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { createNewCharacter, handleModal } from "../../actions/app";
import { importSheet } from "../../actions/save";
import SimpleButton from "../buttons/SimpleButton";

export default function SheetActionModal({ action }) {
    const dispatch = useDispatch();
    const [sheetFile, setSheetFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        switch (action) {
            case 'importSheet':
                dispatch(importSheet(sheetFile));
                break;
            case 'newSheet':
                dispatch(createNewCharacter());
                break;
            default: break;
        }
        dispatch(handleModal(false));
    }

    return (
        <form className="flex flex-col space-y-1 p-2" onSubmit={handleSubmit}>
            {action === 'importSheet' && !window.showSaveFilePicker &&
                <div className="border-b border-gray-400 pb-2">
                    <p className="underline mb-1">Veuillez sélectionner le fichier de la fiche à importer au format .json :</p>
                    <div className="flex justify-center">
                        <input type="file" className="mx-auto" accept="application/json" onChange={(e) => setSheetFile(e.target.files[0])}/>
                    </div>
                </div>
            }
            <p><span className="font-bold">Attention : </span>Cette action supprimera toute modification non enregistrée. Souhaitez-vous continuer ?</p>
            <p className="italic text-xs">Pour enregistrer votre personnage, allez dans <span className="font-bold">Outils &gt; Exporter</span></p>
            <div className="flex justify-center space-x-4">
                <SimpleButton btnType="submit" text={"Confirmer"} />
                <SimpleButton btnType="button" text={"Annuler"} handler={() => dispatch(handleModal(false))} />
            </div>
        </form>
    );
}

SheetActionModal.propTypes = {
    action: PropTypes.string.isRequired,
};

