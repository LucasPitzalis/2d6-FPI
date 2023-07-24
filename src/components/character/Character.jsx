import Job from "./Job";
import Level from "./Level";
import Measurements from "./Measurements";
import SectionTitle from "../SectionTitle";
import LockedInput from "../fields/LockedInput";
import Stats from "./Stats";
import StaticField from "../fields/StaticField";
import { maxWeight } from "../../features/characterStats";
import WantedIndex from "./WantedIndex";
import CharacterControls from "./CharacterControls";
import Avatar from "./Avatar";

export default function Character() {
    return (
        <>
            <div className="flex space-y-4 flex-col md:space-x-2 md:space-y-0 md:flex-row">
                <div className="flex flex-col space-y-0.5 justify-between w-full md:w-1/2">
                    <SectionTitle title="état civil" />
                    <LockedInput label="nom" name="character.name" isTitle />
                    <Avatar />
                    <Measurements />
                    <Job />
                    <LockedInput label="ordre" name="character.order" />
                    <LockedInput label="religion" name="character.religion" />
                </div>
                <div className="flex flex-col space-y-0.5 justify-between w-full md:w-1/2">
                    <SectionTitle title="statistiques et état du personnage" />
                    <Level />
                    <LockedInput label="état physique" name="character.physicalCondition" />
                    <LockedInput label="conséquence" name="character.physicalConsequences" />
                    <LockedInput label="état mental" name="character.mentalCondition" />
                    <LockedInput label="conséquence" name="character.mentalConsequences" />
                    <Stats />
                    <div className="flex space-x-0.5">
                        <StaticField label="poids max (kg)" name="character.maxWeight" styles="w-1/3" value={maxWeight()} vertical />
                        <WantedIndex />
                    </div>
                </div>
            </div>
            <CharacterControls />
        </>
    );
}
