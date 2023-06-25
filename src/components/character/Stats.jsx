import { useSelector } from "react-redux";
import StaticField from "./StaticField";
import stats from "../../utils/characterStats";
import DirectInput from "./DirectInput";

export default function Stats() {
    const { str, dex, con, int, wis, cha } = useSelector((state) => state.character.abilities)

    return (
        <>
            <div className="flex space-x-0.5">
                <StaticField label="for" name="abilities.str" styles="w-1/6" value={str} vertical />
                <StaticField label="dex" name="abilities.dex" styles="w-1/6" value={dex} vertical />
                <StaticField label="con" name="abilities.con" styles="w-1/6" value={con} vertical />
                <StaticField label="int" name="abilities.int" styles="w-1/6" value={int} vertical />
                <StaticField label="sag" name="abilities.wis" styles="w-1/6" value={wis} vertical />
                <StaticField label="cha" name="abilities.cha" styles="w-1/6" value={cha} vertical />
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
