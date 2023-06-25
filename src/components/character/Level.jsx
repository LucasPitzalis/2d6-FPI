import LockedInput from "./LockedInput";

export default function Level() {
    return (
        <div className="flex space-x-0.5">
            <LockedInput label="niveau" name="level" styles="w-1/5" vertical />
            <LockedInput label="xp acquis" name="currentXp" styles="w-2/5" vertical />
            <LockedInput label="xp à atteidre" name="xpToReach" styles="w-2/5" vertical />
        </div>
    );
}
