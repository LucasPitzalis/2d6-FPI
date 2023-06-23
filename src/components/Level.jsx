import SheetField from "./SheetField";

export default function Level() {
    return (
        <div className="flex space-x-0.5">
            <SheetField label="niveau" reducer="character" name="level" styles="w-1/5" vertical />
            <SheetField label="xp acquis" reducer="character" name="currentXp" styles="w-2/5" vertical />
            <SheetField label="xp à atteidre" reducer="character" name="xpToReach" styles="w-2/5" vertical />
        </div>
    );
}
