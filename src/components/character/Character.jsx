import Job from "./Job";
import Level from "./Level";
import Measurements from "./Measurements";
import SectionTitle from "../SectionTitle";
import LockedInput from "./LockedInput";
import Stats from "./Stats";
import StaticField from "./StaticField";
import { abilityPointsLeft, maxWeight } from "../../utils/characterStats";
import { handleModal } from "../../actions/app";
import { useDispatch } from "react-redux";
import SimpleButton from "../buttons/SimpleButton";
import Warning from "../ui-elements/Warning";

export default function Character() {
    const dispatch = useDispatch();

    return (
        <>
            <div className="flex space-y-4 flex-col lg:space-x-2 lg:space-y-0 lg:flex-row">
                <div className="flex flex-col space-y-0.5 justify-between w-full lg:w-1/2">
                    <SectionTitle title="état civil" />
                    <LockedInput label="nom" name="name" isTitle />
                    <div className="w-full aspect-avatar border-2 border-black rounded" />
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
                        <StaticField label="poids max" name="maxWeight" styles="w-1/3" value={maxWeight()} vertical />
                        <LockedInput label="indice de recherche" name="wantedIndex" styles="w-2/3" vertical />
                    </div>
                </div>
            </div>
            <div className="flex mt-1 justify-center space-x-2">
                <div className="relative">
                    <SimpleButton handler={() => dispatch(handleModal('editAbilities')) } text="Editer les caractéristiques" />
                    {abilityPointsLeft() !== 0 && <Warning isRed={abilityPointsLeft() < 0} />}
                </div>
                <SimpleButton onClick={() => dispatch(handleModal('editExperience')) } text="Editer l'expérience" />
            </div>
        </>
    );
}
