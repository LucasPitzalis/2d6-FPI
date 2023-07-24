import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { createNewCharacter, handleModal } from "../../actions/app";
import { importSheet } from "../../actions/save";
import SimpleButton from "../buttons/SimpleButton";

export default function SaveModal({ action }) {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        switch (action) {
            case 'importSheet':
                dispatch(importSheet());
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
            <p>Cette action supprimera toute modification non enregistrée. Souhaitez-vous continuer ?</p>
            <p className="italic text-xs">Pour enregistrer votre personnage, allez dans <span className="font-bold">Outils &gt; Exporter</span></p>
            <div className="flex justify-center space-x-4">
                <SimpleButton btnType="submit" text={"Confirmer"} />
                <SimpleButton btnType="button" text={"Annuler"} handler={() => dispatch(handleModal(false))} />
            </div>
        </form>
    );
}

SaveModal.propTypes = {
    action: PropTypes.string.isRequired,
};

