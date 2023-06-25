import CharField from "./CharField";

export default function Actions() {
    return (
        <div className="flex space-x-0.5">
            <CharField label="attaque" name="attack" styles="w-1/3" />
            <CharField label="défense" name="defence" styles="w-1/3" />
            <CharField label="volonté" name="will" styles="w-1/3" />
        </div>
    );
}
