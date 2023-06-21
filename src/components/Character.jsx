import SheetInput from "./SheetInput";

export default function Character() {
    return (
        <>
            <div className="flex p-4">
                <SheetInput label="nom" name="charName" />
                <SheetInput label="age" name="charAge" />
            </div>
        </>
    );
}
