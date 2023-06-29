import { useSelector } from "react-redux";
import { getLevel } from "../../utils/levels";
import StaticField from "./StaticField";

export default function Level() {
    const { experience } = useSelector((state) => state.character);

    return (
        <div className="flex space-x-0.5">
            <StaticField label="niveau" name="level" styles="w-1/5" value={getLevel(experience).level} vertical />
            <StaticField label="xp acquis" name="experience" styles="w-2/5" value={Number(experience)} vertical />
            <StaticField label="xp à atteidre" name="xpToReach" styles="w-2/5" value={getLevel(experience).nextLevelXp} vertical />
        </div>
    );
}
