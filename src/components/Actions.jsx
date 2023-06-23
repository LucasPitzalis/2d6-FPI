import SheetField from "./SheetField";

export default function Actions() {
    return (
        <div className="flex space-x-0.5">
            <SheetField label="attaque" reducer="character" name="attack" styles="w-1/3" vertical />
            <SheetField label="défense" reducer="character" name="defence" styles="w-1/3" vertical />
            <SheetField label="volonté" reducer="character" name="will" styles="w-1/3" vertical />
        </div>
    );
}
