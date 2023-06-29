import { useState } from "react";
import { useSelector } from "react-redux";
import { getAbilityNameFr } from "../../utils/functions";
import HoverableButton from "../buttons/HoverableButton";

export default function EditAbilities() {
    const { abilities, experience } = useSelector((state) => state.character);

    // {Object.keys(abilities).map((ability) => { return (
    //     <StaticField key={ability} label={getAbilityNameFr(ability)} name={`abilities.${ability}`} value={abilities[ability]} styles="w-1/6" vertical />
    // )})}

    const [abilityChange, setAbilityChange] = useState({str:0, dex:0, con:0, int:0, wis:0, cha:0});
    const totalChange = Object.keys(abilityChange).reduce((acc, ability) => acc + abilityChange[ability], 0);

    return (
        <form>
            <p>Points restants : {}</p>
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
                            <p className="text-xs leading-none">{abilityChange[ability] > -1 ? `+${abilityChange[ability]}` : abilityChange[ability]}</p>
                            <p className="leading-none">&#10233;</p>
                        </td>
                        <td>{abilities[ability]}</td>
                        <td>
                            <HoverableButton icon="-" handler={() => setAbilityChange({...abilityChange, [ability]: abilityChange[ability] - 1})} />
                            <HoverableButton icon="+" handler={() => setAbilityChange({...abilityChange, [ability]: abilityChange[ability] + 1})} />
                        </td>
                    </tr>
                )})}
                </tbody>
            </table>
            {/* // TODO options */}
            <div className="flex flex-col">
                <div><input type="checkbox" name="noLimit"/><label htmlFor="noLimit">Désactiver la limite de points</label></div>
                <div><input type="checkbox" name="allowPointsRemoval"/><label htmlFor="allowPointsRemoval">Autoriser le retrait de points</label></div>
            </div>
        </form>
    );
}
