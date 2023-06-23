import SheetField from "./SheetField";

export default function Measurements() {
    return (
        <div className="flex space-x-0.5">
            <SheetField label="âge" reducer="character" name="age" styles="w-1/3" />
            <SheetField label="taille" reducer="character" name="height" styles="w-1/3" />
            <SheetField label="poids" reducer="character" name="weight" styles="w-1/3" />
        </div>
    );
}
