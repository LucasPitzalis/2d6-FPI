import { useState } from "react";
import { useSelector } from "react-redux";
import { getLevel } from "../../data/levels";
import Warning from "../ui-elements/Warning";

export default function EditPetRolls() {
    const [petIndex, setPetIndex] = useState(0);

    const pets = useSelector((state) => state.pets);

    const pendingRolls = (pet) => getLevel(pet.experience, true).level - pet.levelRolls.length;

    return (
        <form>
            <h4 className="font-bold">Sélection du familier :</h4>
            <select className="border border-black rounded" onChange={(e) => setPetIndex(e.target.value)} >
                {pets.map((pet, index) => 
                    <option key={index} value={index}>
                        {`n°${index + 1} : ${pet.name}`}
                        {pendingRolls(pet) && ` (${pendingRolls(pet)} niv. en attente)`}
                    </option>
                )}
            </select>
        </form>
    );
}
