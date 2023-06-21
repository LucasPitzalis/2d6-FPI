import SheetInput from "./SheetInput";

export default function Character() {
    return (
        <>
            <div className="flex p-4">
                <SheetInput label="nom" name="character.name" />
                <SheetInput label="age" name="character.age" type="number" />
            </div>
        </>
    );
}
