import SheetField from "./CharField";

export default function Health() {
    return (
        <div className="flex space-x-0.5">
            <SheetField label="PV" name="healthPoints" styles="w-1/2" vertical />
            <SheetField label="PE" name="energyPoints" styles="w-1/2" vertical />
        </div>
    );
}
