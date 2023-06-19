import HInput from "./HInput";

export default function Character() {
    return (
        <>
            <div className="flex p-4">
                <HInput label="nom" name="charName" />
            </div>
        </>
    );
}
