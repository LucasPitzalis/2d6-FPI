import SheetField from "./CharField";

export default function Actions() {
    return (
        <div className="flex space-x-0.5">
            <SheetField label="attaque" name="attack" styles="w-1/3" />
            <SheetField label="défense" name="defence" styles="w-1/3" />
            <SheetField label="volonté" name="will" styles="w-1/3" />
        </div>
    );
}
