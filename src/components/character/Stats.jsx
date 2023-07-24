import { useSelector } from "react-redux";
import StaticField from "../fields/StaticField";
import { atk, def, wil, maxHp, maxEp } from "../../features/characterStats";
import DirectInput from "../fields/DirectInput";
import { getAbilityNameFr } from "../../utils/functions";
import AttackIcon from "../../icons/AttackIcon";
import DefenseIcon from "../../icons/DefenseIcon";
import WillIcon from "../../icons/WillIcon";

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
                <StaticField label={{text: 'attaque', icon: <AttackIcon />}} name="character.attack" styles="w-1/3" value={atk()} vertical />
                <StaticField label={{text: 'défense', icon: <DefenseIcon />}} name="character.defence" styles="w-1/3" value={def()} vertical/>
                <StaticField label={{text: 'volonté', icon: <WillIcon />}} name="character.will" styles="w-1/3" value={wil()} vertical />
            </div>
            <div className="flex space-x-0.5">
                <DirectInput label="pv" name="character.healthPoints" styles="w-1/2" htmlType="number" limit={maxHp()} vertical />
                <DirectInput label="pe" name="character.energyPoints" styles="w-1/2" htmlType="number" limit={maxEp()} vertical />
            </div>
        </>
    );
}
