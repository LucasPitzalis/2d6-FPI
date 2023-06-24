import Abilities from "./Abilities";
import Actions from "./Actions";
import Health from "./Health";
import Job from "./Job";
import Level from "./Level";
import Measurements from "./Measurements";
import SectionTitle from "./SectionTitle";
import SheetField from "./SheetField";

export default function Character() {
    return (
        <div className="flex p-4 space-y-2 flex-col lg:space-x-2 lg:space-y-0 lg:flex-row">
            <div className="flex flex-col space-y-0.5 w-full lg:w-1/2">
                <SectionTitle title="état civil" />
                <SheetField label="nom" reducer="character" name="name" isTitle />
                <div className="w-full aspect-avatar border-2 border-black rounded" />
                <Measurements />
                <Job />
                <SheetField label="ordre" reducer="character" name="order" />
                <SheetField label="religion" reducer="character" name="religion" />
            </div>
            <div className="flex flex-col space-y-0.5 w-full lg:w-1/2">
                <SectionTitle title="statistiques et état du personnage" />
                <Level />
                <SheetField label="état physique" reducer="character" name="physicalCondition" />
                <SheetField label="conséquence" reducer="character" name="physicalConsequences" />
                <SheetField label="état mental" reducer="character" name="mentalCondition" />
                <SheetField label="conséquence" reducer="character" name="mentalConsequences" />
                <Abilities />
                <Actions />
                <Health />
                <div className="flex space-x-0.5">
                    <SheetField label="poids max" reducer="character" name="maxWeight" styles="w-1/3" vertical />
                    <SheetField label="indice de recherche" reducer="character" name="wantedIndex" styles="w-2/3" vertical />
                </div>
            </div>
        </div>
    );
}
