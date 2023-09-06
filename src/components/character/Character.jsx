import Job from "./Job";
import Level from "./Level";
import Measurements from "./Measurements";
import SectionTitle from "../SectionTitle";
import InputField from "../fields/InputField";
import Stats from "./Stats";
import StaticField from "../fields/StaticField";
import { maxWeight } from "../../features/characterStats";
import WantedIndex from "./WantedIndex";
import CharacterControls from "./CharacterControls";
import Avatar from "../Avatar";

export default function Character() {
    return (
        <>
            <div className="flex space-y-4 flex-col sm:space-x-2 sm:space-y-0 sm:flex-row">
                <div className="flex flex-col space-y-0.5 justify-between w-full sm:w-1/2">
                    <SectionTitle title="état civil" />
                    <InputField label="nom" name="character.name" isTitle />
                    <Avatar />
                    <Measurements />
                    <Job />
                    <InputField label="ordre" name="character.order" labelStyles="w-20" />
                    <InputField label="religion" name="character.religion" labelStyles="w-20"/>
                </div>
                <div className="flex flex-col space-y-0.5 justify-between w-full sm:w-1/2">
                    <SectionTitle title="statistiques et état du personnage" />
                    <Level />
                    <InputField label="état physique" name="character.physicalCondition" labelStyles="w-32"/>
                    <InputField label="conséquence" name="character.physicalConsequences" labelStyles="w-32"/>
                    <InputField label="état mental" name="character.mentalCondition" labelStyles="w-32"/>
                    <InputField label="conséquence" name="character.mentalConsequences" labelStyles="w-32"/>
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
