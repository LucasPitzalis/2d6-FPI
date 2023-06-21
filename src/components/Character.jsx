import LockedInput from "./LockedInput";

export default function Character() {
    return (
        <>
            <div className="flex p-4">
                <LockedInput label="nom" name="character.name" />
                <LockedInput label="age" name="character.age" type="number" />
            </div>
        </>
    );
}
