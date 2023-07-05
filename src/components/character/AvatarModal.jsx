import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "../../actions/app";
import { editChar } from "../../actions/character";
import SimpleButton from "../buttons/SimpleButton";

export default function AvatarModal() {
    const { avatar } = useSelector((state) => state.character);
    const [currentValue, setCurrentValue] = useState(avatar);
    const dispatch = useDispatch();
    const ref = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editChar({name: 'avatar', value: currentValue}));
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
