import CharField from "./CharField";

export default function Measurements() {
    return (
        <div className="flex space-x-0.5">
            <CharField label="âge" name="age" styles="w-1/3" />
            <CharField label="taille" name="height" styles="w-1/3" />
            <CharField label="poids" name="weight" styles="w-1/3" />
        </div>
    );
}
