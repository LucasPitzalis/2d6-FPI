import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "../../actions/app";
import { editExperience } from "../../actions/character";
import { currentLevel } from "../../features/characterStats";
import { getLevel, minXp } from "../../data/levels";
import SimpleButton from "../buttons/SimpleButton";
import { currentPetLevel } from "../../features/petStats";
import { editPetExperience } from "../../actions/pets";
import { useLocation } from "react-router-dom";


export default function EditExperience() {
    const location = useLocation();
    const isPet = location.pathname === "/familiers";

    const pets = useSelector((state) => state.pets);

    const [petIndex, setPetIndex] = useState(isPet ? 0 : false);
    const subjectCurrentLevel = !isPet ? currentLevel().level : currentPetLevel(petIndex).level;

    const [method, setMethod] = useState("addXp");
    const [xpToAdd, setXpToAdd] = useState(0);
    const [targetLevel, setTargetLevel] = useState(subjectCurrentLevel);

    const { experience } = useSelector((state) => !isPet ? state.character : state.pets[petIndex]);
    const reachedLevel = getLevel(experience + xpToAdd, petIndex);

    function selectMethod(e) {
        setMethod(e.target.value);
    }

    console.log(petIndex)

    const isDisabled = () => {
        switch (method) {
            case "addXp": return xpToAdd < 1;
            case "goToLevel": return targetLevel === (subjectCurrentLevel);
            default: break;
        }
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isDisabled()) return;
        switch (method) {
            case "addXp": 
                dispatch(!isPet ? editExperience(experience + xpToAdd) : editPetExperience(experience + xpToAdd, petIndex));
                break;
            case "goToLevel": 
                dispatch(!isPet ? editExperience(minXp(targetLevel)) : editPetExperience(minXp(targetLevel, petIndex), petIndex));
                break;
            default: break;
        }
        dispatch(handleModal(false));
    }

    return (
        <form className="flex flex-col space-y-1 p-2" onSubmit={handleSubmit}>
            {isPet &&
                <>
                    <h4 className="font-bold">Sélection du familier :</h4>
                    <select onChange={(e) => setPetIndex(e.target.value)} >
                        {pets.map((pet, index) => <option key={index} value={index}>{`n°${index + 1} : ${pet.name}`}</option>)}
                    </select>
                </>
            }
            <h4 className="font-bold">Choix de la méthode :</h4>
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
                            if (e.target.value >= 0) setXpToAdd(Number(e.target.value));
                        }}
                    />
                    {method === "addXp" && reachedLevel.level - subjectCurrentLevel > 0 && <span className="italic text-gray-700">(niveau atteint: {reachedLevel.level})</span>}
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
                        if (e.target.value >= 1 && e.target.value <= 20) setTargetLevel(Number(e.target.value));
                    }}
                />
            </div>
            <div className="flex justify-center">
                <SimpleButton btnType="submit" text={"Enregistrer"} isDisabled={isDisabled()} />
            </div>
        </form>
    );
}
