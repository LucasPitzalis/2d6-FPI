import InputField from "../fields/InputField";

export default function Measurements() {
    return (
        <div className="flex space-x-0.5">
            <InputField label="âge" name="character.age" styles="w-1/3" />
            <InputField label="taille" name="character.height" styles="w-1/3" />
            <InputField label="poids" name="character.weight" styles="w-1/3" />
        </div>
    );
}
