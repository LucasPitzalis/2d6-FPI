import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { handleModal } from "../../actions/app";
import { editPetRolls } from "../../actions/pets";
import { getLevel, petLevelsTable } from "../../data/levels";
import { currentPetLevel } from "../../features/petStats";
import { rollDice } from "../../utils/functions";
import SimpleButton from "../buttons/SimpleButton";

export default function EditPetRolls() {
    const dispatch = useDispatch();

    const [petIndex, setPetIndex] = useState(0);

    const pets = useSelector((state) => state.pets);
    const [rolls, setRolls] = useState(pets[petIndex].levelRolls);

    const pendingRolls = (pet) => getLevel(pet.experience, true).level - pet.levelRolls.length;

    useEffect(() => setRolls(pets[petIndex].levelRolls), [petIndex])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editPetRolls(rolls, petIndex));
        dispatch(handleModal(false));
    }

    function rollPendingLevels() {
        const newRolls = [...rolls];
        for(let i = 1; i <= pendingRolls(pets[petIndex]); i++) {
            const currentLevel = currentPetLevel(petIndex).level + i - pendingRolls(pets[petIndex]);
            newRolls.push({hpEp: rollDice(petLevelsTable[currentLevel - 1].hpEpDice), skill: rollDice(petLevelsTable[currentLevel - 1].skillDice)})
        }
        setRolls(newRolls);
    }

    function updateRoll(e) {
        const [index, property] = e.target.name.split('.');
        const diceAmount = petLevelsTable[index][`${property}Dice`];
        if(e.target.value > diceAmount * 6 || e.target.value < diceAmount) return;
        const newRolls = [...rolls];
        newRolls[index] = {...rolls[index], [property]: Number(e.target.value)};
        setRolls(newRolls);
    }

    return (
        <form className="flex flex-col p-2 pb-0" onSubmit={handleSubmit}>
            <div className="relative border-b border-gray-400 pb-2 flex flex-col justify-between space-y-1">
                <h4 className="font-bold">Sélection du familier :</h4>
                <select className="border border-black rounded" onChange={(e) => setPetIndex(e.target.value)} >
                    {pets.map((pet, index) => 
                        <option key={index} value={index}>
                            {`n°${index + 1} : ${pet.name}`}
                            {pendingRolls(pet) !== 0 && ` (${pendingRolls(pet)} niv. en attente)`}
                        </option>
                    )}
                </select>
            </div>
            <div className="flex flex-wrap flex-col justify-center items-center">
                <SimpleButton text={"Lancer les dés"} handler={rollPendingLevels} isDisabled={currentPetLevel(petIndex).level === rolls.length} />
                <table className="mt-1 w-full border-spacing-x-3 border-spacing-y-2 text-center">
                    <thead>
                        <tr className="border-b border-gray-400">
                            <th>Niv.</th>
                            <th>Pts de PV/PE</th>
                            <th>Pts de comp.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rolls.length !== 0 && rolls.map((roll, index) => (
                            <tr key={`level${index + 1}`} className="border-b border-gray-400">
                                <td>{index + 1}</td>
                                <td>
                                    <span className="text-xs">{petLevelsTable[index].hpEpDice}d6 :</span>
                                    <input 
                                        className="ml-1 w-12 text-center border border-black rounded disabled:inactive" 
                                        type="number" name={`${index}.hpEp`} step="1" 
                                        value={roll.hpEp} onChange={updateRoll}
                                    />
                                </td>
                                <td>
                                    <span className="text-xs">{petLevelsTable[index].skillDice}d6 :</span>
                                    <input 
                                        className="ml-1 w-12 text-center border border-black rounded disabled:inactive" 
                                        type="number" name={`${index}.skill`} step="1" 
                                        value={roll.skill} onChange={updateRoll}
                                    />
                                </td>
                            </tr>
                        ))}
                        <tr className="font-bold">
                            <td>Total</td>
                            <td>{rolls.reduce((sum, roll) => sum + Number(roll.hpEp), 0)}</td>
                            <td>{rolls.reduce((sum, roll) => sum + Number(roll.skill), 0)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-1">
                <SimpleButton btnType="submit" text={"Enregistrer"} isDisabled={rolls.length === 0} />
            </div>
        </form>
    );
}
