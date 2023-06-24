import SheetField from "./CharField";

export default function Measurements() {
    return (
        <div className="flex space-x-0.5">
            <SheetField label="âge" name="age" styles="w-1/3" />
            <SheetField label="taille" name="height" styles="w-1/3" />
            <SheetField label="poids" name="weight" styles="w-1/3" />
        </div>
    );
}
