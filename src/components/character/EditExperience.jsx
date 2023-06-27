import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "../../actions/app";
import { editExperience } from "../../actions/character";
import { getLevel, levelsTable } from "../../utils/levels";
import SubmitButton from "../SubmitButton";

export default function EditExperience() {
    const { experience } = useSelector((state) => state.character);
    const [method, setMethod] = useState("addXp");
    const [xpToAdd, setXpToAdd] = useState(0);
    
    const currentLevel = getLevel(experience);
    const [targetLevel, setTargetLevel] = useState(currentLevel);

    const reachedLevel = getLevel(Number(experience) + Number(xpToAdd));

    function selectMethod(e) {
        setMethod(e.target.value);
    }

    const isDisabled = () => {
        switch (method) {
            case "addXp": return xpToAdd < 1;
            case "goToLevel": return Number(targetLevel) === currentLevel;
            default: break;
        }
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        switch (method) {
            case "addXp": 
                dispatch(editExperience(Number(experience) + Number(xpToAdd)));
                break;
            case "goToLevel": 
                dispatch(editExperience(levelsTable.find((levelObject) => levelObject.level === Number(targetLevel)).minXp));
                break;
            default: break;
        }
        dispatch(handleModal(false));
    }

    return (
        <form className="flex flex-col space-y-1 mt-1" onSubmit={handleSubmit}>
            <h4>Choix de la méthode :</h4>
            <div>
                <div className="flex space-x-2">
                    <input defaultChecked type="radio" name="method" value="addXp" onClick={selectMethod}/>
                    <label htmlFor="method">Ajouter de l&apos;expérience :</label>
                </div>
                <div className="flex space-x-2">
                    <input 
                        className="ml-5 w-24 text-center border border-black rounded disabled:inactive" 
                        disabled={method !== "addXp"} 
                        type="number" name="xpToAdd" step="1" 
                        value={xpToAdd} onChange={(e) => {
                            if (e.target.value >= 0) setXpToAdd(e.target.value);
                        }}
                    />
                    {method === "addXp" && reachedLevel - currentLevel > 0 && <span className="italic text-gray-700">(niveau atteint: {reachedLevel})</span>}
                </div>
            </div>
            <div>
                <div className="flex space-x-2">
                    <input type="radio" name="method" value="goToLevel" onClick={selectMethod}/>
                    <label htmlFor="method">Aller directement au niveau souhaité :</label>
                </div>
                <input 
                    className="ml-5 w-24 text-center border border-black rounded disabled:inactive" 
                    disabled={method !== "goToLevel"} 
                    type="number" name="targetLevel" step="1" 
                    value={targetLevel} onChange={(e) => {
                        if (e.target.value >= 1 && e.target.value <= 20) setTargetLevel(e.target.value);
                    }}
                />
            </div>
            <div className="flex justify-center">
                <SubmitButton text={"Enregistrer"} isDisabled={isDisabled()} />
            </div>
        </form>
    );
}
