import CharField from "./CharField";

export default function Health() {
    return (
        <div className="flex space-x-0.5">
            <CharField label="PV" name="healthPoints" styles="w-1/2" vertical />
            <CharField label="PE" name="energyPoints" styles="w-1/2" vertical />
        </div>
    );
}
