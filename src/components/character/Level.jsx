import { useSelector } from "react-redux";
import { currentLevel } from "../../features/characterStats";
import StaticField from "../fields/StaticField";

export default function Level() {
    const { experience } = useSelector((state) => state.character);

    return (
        <div className="flex space-x-0.5">
            <StaticField label="niveau" name="character.level" styles="w-1/5" value={currentLevel().level} vertical />
            <StaticField label="xp acquis" name="character.experience" styles="w-2/5" value={Number(experience)} vertical />
            <StaticField label="xp à atteidre" name="character.xpToReach" styles="w-2/5" value={currentLevel().nextLevelXp} vertical />
        </div>
    );
}
