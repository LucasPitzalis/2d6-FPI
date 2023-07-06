import LockedInput from "../fields/LockedInput";

export default function Measurements() {
    return (
        <div className="flex space-x-0.5">
            <LockedInput label="âge" name="character.age" styles="w-1/3" />
            <LockedInput label="taille" name="character.height" styles="w-1/3" />
            <LockedInput label="poids" name="character.weight" styles="w-1/3" />
        </div>
    );
}
