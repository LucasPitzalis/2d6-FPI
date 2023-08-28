import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getLevel, petLevelsTable } from "../../data/levels";
import { currentPetLevel } from "../../features/petStats";
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
        newRolls[index] = {...rolls[index], [property]: e.target.value};
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
                            {pendingRolls(pet) !== 0 && ` (${pendingRolls(pet)} niv. en attente)`}
                        </option>
                    )}
                </select>
            </div>
            <div className="flex flex-wrap flex-col justify-center items-center">
                <SimpleButton text={"Lancer les dés"} handler={rollPendingLevels} isDisabled={currentPetLevel(petIndex).level === rolls.length} />
                <div className="flex flex-col justify-center items-center mt-1 [&>*:not(:last-child)]:pb-1 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-gray-400">
                    {rolls.length !== 0 && rolls.map((roll, index) => 
                        <div key={`level${index + 1}`} className="flex space-x-2 pt-1">
                            <div className="min-w-[40px] flex justify-center items-center font-bold flex-nowrap">{`Niv. ${index + 1} :`}</div>
                            <div className="flex flex-wrap justify-center items-center gap-y-1 gap-x-2">
                                <div className="flex flex-nowrap justify-center items-center">
                                    <span>Pts PV/PE <span className="text-xs">({petLevelsTable[index].hpEpDice}d6)</span></span>
                                    <input 
                                        className="ml-1 w-12 text-center border border-black rounded disabled:inactive" 
                                        type="number" name={`${index}.hpEp`} step="1" 
                                        value={roll.hpEp} onChange={updateRoll}
                                    />
                                </div>
                                <div className="flex flex-nowrap justify-center items-center">
                                    <span>Pts comp. <span className="text-xs">({petLevelsTable[index].skillDice}d6)</span></span>
                                    <input 
                                        className="ml-1 w-12 text-center border border-black rounded disabled:inactive" 
                                        type="number" name={`${index}.skill`} step="1" 
                                        value={roll.skill} onChange={updateRoll}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </form>
    );
}
