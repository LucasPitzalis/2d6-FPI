import LockedInput from "./LockedInput";

export default function Measurements() {
    return (
        <div className="flex space-x-0.5">
            <LockedInput label="âge" name="age" styles="w-1/3" htmlType="number" />
            <LockedInput label="taille" name="height" styles="w-1/3" htmlType="number" />
            <LockedInput label="poids" name="weight" styles="w-1/3" htmlType="number" />
        </div>
    );
}
