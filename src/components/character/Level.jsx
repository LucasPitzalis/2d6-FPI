import { useSelector } from "react-redux";
import { getLevel, getNextLevelXp } from "../../utils/levels";
import LockedInput from "./LockedInput";
import StaticField from "./StaticField";

export default function Level() {
    const { experience } = useSelector((state) => state.character)

    return (
        <div className="flex space-x-0.5">
            <StaticField label="niveau" name="level" styles="w-1/5" value={getLevel(experience)} vertical />
            <LockedInput label="xp acquis" name="experience" styles="w-2/5" htmlType="number" vertical />
            <StaticField label="xp à atteidre" name="xpToReach" styles="w-2/5" value={getNextLevelXp(experience)} vertical />
        </div>
    );
}
