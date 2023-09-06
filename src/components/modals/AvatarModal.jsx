import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "../../actions/app";
import { editField } from "../../actions/app";
import SimpleButton from "../buttons/SimpleButton";
import PropTypes from 'prop-types';
import { properFalse } from "../../utils/functions";

export default function AvatarModal({ petIndex }) {
    const { avatar } = useSelector((state) => state.character);
    const [currentValue, setCurrentValue] = useState(avatar);
    const dispatch = useDispatch();
    const ref = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editField({name: !properFalse(petIndex) ? 'character.avatar' : `pets.${petIndex}.avatar`, value: currentValue}));
        dispatch(handleModal(false))
    }

    useEffect(() => {
        ref.current.select();
    }, [])

    return (
        <form className="flex flex-col space-y-1 p-2" onSubmit={handleSubmit}>
            <p>Veuillez saisir l&apos;URL de l&apos;image souhaitée :</p>
            <input ref={ref} className="w-full border border-black rounded" type="text" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} placeholder="Lien vers l'image souhaitée" />
            <div className="flex justify-center">
                <SimpleButton btnType="submit" text={"Enregistrer"} />
            </div>
        </form>
    );
}


AvatarModal.propTypes = {
    petIndex: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ])
};

AvatarModal.defaultProps = {
    petIndex: false,
}
