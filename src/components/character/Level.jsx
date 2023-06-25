import CharField from "./CharField";

export default function Level() {
    return (
        <div className="flex space-x-0.5">
            <CharField label="niveau" name="level" styles="w-1/5" vertical />
            <CharField label="xp acquis" name="currentXp" styles="w-2/5" vertical />
            <CharField label="xp à atteidre" name="xpToReach" styles="w-2/5" vertical />
        </div>
    );
}
