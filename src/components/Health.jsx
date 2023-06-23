import SheetField from "./SheetField";

export default function Health() {
    return (
        <div className="flex space-x-0.5">
            <SheetField label="PV" reducer="character" name="healthPoints" styles="w-1/2" vertical />
            <SheetField label="PE" reducer="character" name="energyPoints" styles="w-1/2" vertical />
        </div>
    );
}
