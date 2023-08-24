import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getLevel } from "../../data/levels";
import { rollDice } from "../../utils/functions";
import SimpleButton from "../buttons/SimpleButton";

export default function EditPetRolls() {
    const [petIndex, setPetIndex] = useState(0);

    const pets = useSelector((state) => state.pets);
    const [rolls, setRolls] = useState(pets[petIndex].levelRolls);

    const pendingRolls = (pet) => getLevel(pet.experience, true).level - pet.levelRolls.length;

    useEffect(() => setRolls(pets[petIndex].levelRolls), [petIndex])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    function rollPendingLevels() {
        const newRolls = [...rolls];
        for(let i = 1; i <= pendingRolls(pets[petIndex]); i++) {
            newRolls.push({hpEp: rollDice(), skillPts: rollDice()})
        }
        setRolls(newRolls);
    }

    return (
        <form className="flex flex-col p-2" onSubmit={handleSubmit}>
            <div className="relative border-b border-gray-400 pb-2 flex flex-col justify-between space-y-1">
                <h4 className="font-bold">Sélection du familier :</h4>
                <select className="border border-black rounded" onChange={(e) => setPetIndex(e.target.value)} >
                    {pets.map((pet, index) => 
                        <option key={index} value={index}>
                            {`n°${index + 1} : ${pet.name}`}
                            {pendingRolls(pet) && ` (${pendingRolls(pet)} niv. en attente)`}
                        </option>
                    )}
                </select>
            </div>
            <div className="flex flex-wrap flex-col justify-center space-x-2">
                <SimpleButton text={"Lancer les dés"} handler={rollPendingLevels} />
                {rolls.length !== 0 && rolls.map((roll, index) => <span key={`level${index + 1}`}>{`Niv. ${index + 1} : Pts de PV/PE : ${roll.hpEp} - Pts de compétences : ${roll.skillPts}`}</span>)}
            </div>
        </form>
    );
}
