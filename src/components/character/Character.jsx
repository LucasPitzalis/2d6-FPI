import Job from "./Job";
import Level from "./Level";
import Measurements from "./Measurements";
import SectionTitle from "../SectionTitle";
import LockedInput from "./LockedInput";
import Stats from "./Stats";
import StaticField from "./StaticField";
import { maxWeight } from "../../utils/characterStats";
import WantedIndex from "./WantedIndex";
import CharacterControls from "./CharacterControls";
import Avatar from "./Avatar";

export default function Character() {
    return (
        <>
            <div className="flex space-y-4 flex-col lg:space-x-2 lg:space-y-0 lg:flex-row">
                <div className="flex flex-col space-y-0.5 justify-between w-full lg:w-1/2">
                    <SectionTitle title="état civil" />
                    <LockedInput label="nom" name="name" isTitle />
                    <Avatar />
                    <Measurements />
                    <Job />
                    <LockedInput label="ordre" name="order" />
                    <LockedInput label="religion" name="religion" />
                </div>
                <div className="flex flex-col space-y-0.5 justify-between w-full lg:w-1/2">
                    <SectionTitle title="statistiques et état du personnage" />
                    <Level />
                    <LockedInput label="état physique" name="physicalCondition" />
                    <LockedInput label="conséquence" name="physicalConsequences" />
                    <LockedInput label="état mental" name="mentalCondition" />
                    <LockedInput label="conséquence" name="mentalConsequences" />
                    <Stats />
                    <div className="flex space-x-0.5">
                        <StaticField label="poids max (kg)" name="maxWeight" styles="w-1/3" value={maxWeight()} vertical />
                        <WantedIndex />
                    </div>
                </div>
            </div>
            <CharacterControls />
        </>
    );
}
