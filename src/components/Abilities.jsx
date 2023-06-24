import SheetField from "./SheetField";

export default function Abilities() {
    return (
        <div className="flex space-x-0.5">
            <SheetField label="force" reducer="character" name="abilities.str" styles="w-1/6" vertical />
            <SheetField label="dextérité" reducer="character" name="abilities.dex" styles="w-1/6" vertical />
            <SheetField label="constitution" reducer="character" name="abilities.con" styles="w-1/6" vertical />
            <SheetField label="intelligence" reducer="character" name="abilities.int" styles="w-1/6" vertical />
            <SheetField label="sagesse" reducer="character" name="abilities.wis" styles="w-1/6" vertical />
            <SheetField label="charisme" reducer="character" name="abilities.cha" styles="w-1/6" vertical />
        </div>
    );
}
