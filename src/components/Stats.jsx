import SheetField from "./SheetField";

export default function Stats() {
    return (
        <div className="flex space-x-0.5">
            <SheetField label="force" reducer="character" name="strength" styles="w-1/6" vertical />
            <SheetField label="dextérité" reducer="character" name="dexterity" styles="w-1/6" vertical />
            <SheetField label="constitution" reducer="character" name="constitution" styles="w-1/6" vertical />
            <SheetField label="intelligence" reducer="character" name="intelligence" styles="w-1/6" vertical />
            <SheetField label="sagesse" reducer="character" name="wisdom" styles="w-1/6" vertical />
            <SheetField label="charisme" reducer="character" name="charisma" styles="w-1/6" vertical />
        </div>
    );
}
