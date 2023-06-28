import { useSelector } from "react-redux";
import StaticField from "./StaticField";
import stats from "../../utils/characterStats";
import DirectInput from "./DirectInput";
import { getAbilityNameFr } from "../../utils/functions";

export default function Stats() {
    const { abilities } = useSelector((state) => state.character);

    return (
        <>
            <div className="flex space-x-0.5">
                {Object.keys(abilities).map((ability) => { return (
                        <StaticField key={ability} label={getAbilityNameFr(ability)} name={`abilities.${ability}`} value={abilities[ability]} styles="w-1/6" vertical />
                )})}
            </div>
            <div className="flex space-x-0.5">
                <StaticField label="attaque" name="attack" styles="w-1/3" value={stats.atk()} vertical />
                <StaticField label="défense" name="defence" styles="w-1/3" value={stats.def()} vertical/>
                <StaticField label="volonté" name="will" styles="w-1/3" value={stats.wil()} vertical />
            </div>
            <div className="flex space-x-0.5">
                <DirectInput label="pv" name="healthPoints" styles="w-1/2" htmlType="number" limit={stats.maxHp()} vertical />
                <DirectInput label="pe" name="energyPoints" styles="w-1/2" htmlType="number" limit={stats.maxEp()} vertical />
            </div>
        </>
    );
}
