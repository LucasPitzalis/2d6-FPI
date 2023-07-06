import { useSelector } from "react-redux";
import StaticField from "../fields/StaticField";
import { atk, def, wil, maxHp, maxEp } from "../../utils/characterStats";
import DirectInput from "../fields/DirectInput";
import { getAbilityNameFr } from "../../utils/functions";

export default function Stats() {
    const { abilities } = useSelector((state) => state.character);

    return (
        <>
            <div className="flex space-x-0.5">
                {Object.keys(abilities).map((ability) => { return (
                        <StaticField key={ability} label={getAbilityNameFr(ability)} name={`character.abilities.${ability}`} value={abilities[ability]} styles="w-1/6" vertical />
                )})}
            </div>
            <div className="flex space-x-0.5">
                <StaticField label="attaque" name="character.attack" styles="w-1/3" value={atk()} vertical />
                <StaticField label="défense" name="character.defence" styles="w-1/3" value={def()} vertical/>
                <StaticField label="volonté" name="character.will" styles="w-1/3" value={wil()} vertical />
            </div>
            <div className="flex space-x-0.5">
                <DirectInput label="pv" name="character.healthPoints" styles="w-1/2" htmlType="number" limit={maxHp()} vertical />
                <DirectInput label="pe" name="character.energyPoints" styles="w-1/2" htmlType="number" limit={maxEp()} vertical />
            </div>
        </>
    );
}
