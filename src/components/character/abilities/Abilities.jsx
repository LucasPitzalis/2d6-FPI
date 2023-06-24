import SheetField from "../CharField";

export default function Abilities() {
    return (
        <div className="flex space-x-0.5">
            <SheetField label="force" name="abilities.str" styles="w-1/6" vertical />
            <SheetField label="dextérité" name="abilities.dex" styles="w-1/6" vertical />
            <SheetField label="constitution" name="abilities.con" styles="w-1/6" vertical />
            <SheetField label="intelligence" name="abilities.int" styles="w-1/6" vertical />
            <SheetField label="sagesse" name="abilities.wis" styles="w-1/6" vertical />
            <SheetField label="charisme" name="abilities.cha" styles="w-1/6" vertical />
        </div>
    );
}
