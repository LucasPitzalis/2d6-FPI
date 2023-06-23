import SheetField from "./SheetField";

export default function Character() {
    return (
        <>
            <div className="flex p-4">
                <SheetField label="nom" reducer="character" name="name" />
            </div>
        </>
    );
}
