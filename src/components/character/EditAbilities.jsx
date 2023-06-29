import { useState } from "react";
import { useSelector } from "react-redux";
import { getAbilityNameFr } from "../../utils/functions";
import MinusButton from "../buttons/MinusButton";
import PlusButton from "../buttons/PlusButton";

export default function EditAbilities() {
    const { abilities } = useSelector((state) => state.character);

    // {Object.keys(abilities).map((ability) => { return (
    //     <StaticField key={ability} label={getAbilityNameFr(ability)} name={`abilities.${ability}`} value={abilities[ability]} styles="w-1/6" vertical />
    // )})}

    const [abilityChange, setAbilityChange] = useState({str:0, dex:0, con:0, int:0, wis:0, cha:0});
    const totalChange = Object.keys(abilityChange).reduce((acc, ability) => acc + abilityChange[ability], 0);

    return (
        <form>
            <table className="table-auto text-center mt-2 border-separate border-spacing-x-10 border-spacing-y-2">
                <thead>
                    <tr>
                        <th>Carac.</th>
                        <th>Valeur<br />initiale</th>
                        <th></th>
                        <th>Valeur<br />finale</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {Object.keys(abilities).map((ability) => { return (
                    <tr key={ability}>
                        <td>{getAbilityNameFr(ability)}</td>
                        <td>{abilities[ability]}</td>
                        <td>
                            <p className="text-xs leading-none">{abilityChange[ability] >= -1 ? `+ ${abilityChange[ability]}` : abilityChange[ability]}</p>
                            <p className="leading-none">&#10233;</p>
                        </td>
                        <td>{abilities[ability]}</td>
                        <td>
                            <MinusButton scale={75} onClick={() => console.log("oui")} />
                            <PlusButton scale={75} onClick={() => console.log("oui")} />
                        </td>
                    </tr>
                )})}
                </tbody>
            </table>
        </form>
    );
}
