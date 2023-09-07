import { useDispatch, useSelector } from "react-redux";
import InputField from "../fields/InputField";
import StaticField from "../fields/StaticField";
import PropTypes from 'prop-types';
import DeletableItem from "../context/DeletableItem";
import { deletePet } from "../../actions/pets";
import { currentPetLevel } from "../../features/petStats";
import Avatar from "../Avatar";
import AttackIcon from "../../icons/AttackIcon";
import DefenseIcon from "../../icons/DefenseIcon";
import WillIcon from "../../icons/WillIcon";
import SpecialIcon from "../../icons/SpecialIcon";
import DropdownItem from "../context/DropdownItem";
import PetItem from "./PetItem";

export default function Pet({ index, deleteMode }) {
    const dispatch = useDispatch();
    const pet = useSelector((state) => state.pets[index]);
    const carriedItems = useSelector((state) => state.items).filter((item) => item.bearer === index);

    return (
        <DeletableItem 
            handler={() => dispatch(deletePet(index))}
            deleteMode={deleteMode}
            styles="flex-col py-2 space-y-0.5 border-t border-gray-400 w-full"
        >
            <DropdownItem 
                defaultOpen
                header={
                    <>
                        <StaticField name={`pets.${index}`} value={`N°${index + 1}`} />
                        <InputField name={`pets.${index}.name`} placeHolder="Nom du familier..." />
                        <StaticField name={`pets.${index}.level`} value={`Niv. ${currentPetLevel(index).level}`} />
                    </>
                }
            >
                <div className="flex flex-col xxs:flex-row gap-0.5">
                    <div className="flex flex-col gap-0.5 w-full ">
                        <StaticField label="xp acquis" name={`pets.${index}.experience`} center styles="w-full" value={pet.experience} />
                        <StaticField label="xp prochain" name={`pets.${index}.xpToReach`} value={currentPetLevel(index).nextLevelXp} styles="w-full" />
                    </div>
                    <div className="flex gap-0.5 w-full">
                        <InputField 
                            label="pv" name={`pets.${index}.healthPts`} vertical styles="w-full" htmlType="number" center
                            checkCondition={(value) => value <= pet.stats.maxHp} suffix={`/ ${pet.stats.maxHp}`} 
                        />
                        <InputField 
                            label="pe" name={`pets.${index}.energyPts`} vertical styles="w-full" htmlType="number" center
                            checkCondition={(value) => value <= pet.stats.maxEp} suffix={`/ ${pet.stats.maxEp}`} 
                        />
                    </div>
                </div>
                <div className="flex flex-col xs:flex-row gap-0.5">
                    <Avatar petIndex={index} />
                    <div className="flex flex-col justify-between gap-0.5 w-full xs:w-4/5">
                        <div className="flex gap-0.5">
                            <InputField label={{text: 'attaque', icon: <AttackIcon />}} name={`pets.${index}.atkDesc`} styles="w-full" />
                            <StaticField name={`pets.${index}.stats.atk`} htmlType="number" center styles={'w-12'} value={pet.stats.atk} />
                        </div>
                        <div className="flex gap-0.5">
                            <InputField label={{text: 'défense', icon: <DefenseIcon />}} name={`pets.${index}.defDesc`} styles="w-full" />
                            <StaticField name={`pets.${index}.stats.def`} htmlType="number" center styles={'w-12'} value={pet.stats.def} />
                        </div>
                        <div className="flex gap-0.5">
                            <InputField label={{text: 'volonté', icon: <WillIcon />}} name={`pets.${index}.wilDesc`} styles="w-full" />
                            <StaticField name={`pets.${index}.stats.wil`} htmlType="number" center styles={'w-12'} value={pet.stats.wil} />
                        </div>
                        <div className="flex gap-0.5">
                            <InputField label={{text: 'spécial', icon: <SpecialIcon />}} name={`pets.${index}.speDesc`} styles="w-full" />
                            <StaticField name={`pets.${index}.stats.spe`} htmlType="number" center styles={'w-12'} value={pet.stats.spe} />
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <InputField name={`pets.${index}.desc`} label="description" multiline={2} styles="w-full" />
                </div>
                <div className="flex flex-col sm:flex-row gap-0.5">
                    <InputField name={`pets.${index}.talent`} label="forces" styles="w-full" />
                    <InputField name={`pets.${index}.weakness`} label="faiblesses" styles="w-full" />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-0.5">
                    {carriedItems.map((item, itemIndex) => <PetItem key={`item.${itemIndex}`} {...{itemIndex, item}}/>)}
                </div>
            </DropdownItem>
        </DeletableItem>
    );
}

Pet.propTypes = {
    index: PropTypes.number.isRequired,
    deleteMode: PropTypes.bool.isRequired,
};
