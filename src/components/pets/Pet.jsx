import { useDispatch, useSelector } from "react-redux";
import InputField from "../fields/InputField";
import StaticField from "../fields/StaticField";
import PropTypes from 'prop-types';
import DeletableItem from "../DeletableItem";
import { deletePet } from "../../actions/pets";
import { currentPetLevel } from "../../features/petStats";
import Avatar from "../character/Avatar";
import AttackIcon from "../../icons/AttackIcon";
import DefenseIcon from "../../icons/DefenseIcon";
import WillIcon from "../../icons/WillIcon";
import SpecialIcon from "../../icons/SpecialIcon";
import DropdownItem from "../ui-elements/DropdownItem";

export default function Pet({ index, deleteMode }) {
    const dispatch = useDispatch();
    const pet = useSelector((state) => state.pets[index])

    return (
        <DeletableItem 
            handler={() => dispatch(deletePet(index))}
            deleteMode={deleteMode}
            styles="flex-col py-2 space-y-0.5 border-t border-gray-400 w-full"
        >
            <DropdownItem 
                header={
                    <>
                        <StaticField name={`pets.${index}`} value={`N°${index + 1}`} />
                        <InputField name={`pets.${index}.name`} placeHolder="Nom du familier..." />
                        <StaticField name={`pets.${index}.level`} value={`Niv. ${currentPetLevel(index).level}`} />
                    </>
                }
            >
                <div className="flex flex-col md:flex-row space-y-0.5 md:space-y-0 md:space-x-0.5">
                    <div className="flex flex-col justify-between space-y-0.5 w-full md:w-1/2">
                        <div className="flex space-x-0.5">
                            
                            <StaticField label="xp acquis" name={`pets.${index}.experience`} center styles={'w-full'} value={pet.experience} />
                            <StaticField label="xp prochain" name={`pets.${index}.xpToReach`} value={currentPetLevel(index).nextLevelXp} styles={'w-full'} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-0.5 w-full md:w-1/2">
                        <div className="flex space-x-0.5">
                            <InputField label="nb. de pt. pv/pe" name={`pets.${index}.hpEpPts`} htmlType="number" center styles={'w-1/2'} />
                            <InputField label="pt. compétences" name={`pets.${index}.skillPts`} htmlType="number" center styles={'w-1/2'} />
                        </div>
                        <div className="flex space-x-0.5">
                            <InputField label="PV" name={`pets.${index}.healthPts`} htmlType="number" center styles={'w-1/3'} />
                            <InputField name={`pets.${index}.maxHp`} htmlType="number" center styles={'w-1/6'} />
                            <InputField label="PE" name={`pets.${index}.energyPts`} htmlType="number" center styles={'w-1/3'} />
                            <InputField name={`pets.${index}.maxEp`} htmlType="number" center styles={'w-1/6'} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row space-y-0.5 md:space-y-0 md:space-x-0.5">
                    <Avatar />
                    <div className="flex flex-col justify-between space-y-0.5 w-full md:w-1/2">
                        <div className="flex space-x-0.5">
                            <InputField label={{text: 'attaque', icon: <AttackIcon />}} name={`pets.${index}.atkDesc`} styles={'w-full'} />
                            <StaticField name={`pets.${index}.stats.atk`} htmlType="number" center styles={'w-12'} value={pet.stats.atk} />
                        </div>
                        <div className="flex space-x-0.5">
                            <InputField label={{text: 'défense', icon: <DefenseIcon />}} name={`pets.${index}.defDesc`} styles={'w-full'} />
                            <StaticField name={`pets.${index}.stats.def`} htmlType="number" center styles={'w-12'} value={pet.stats.def} />
                        </div>
                        <div className="flex space-x-0.5">
                            <InputField label={{text: 'volonté', icon: <WillIcon />}} name={`pets.${index}.wilDesc`} styles={'w-full'} />
                            <StaticField name={`pets.${index}.stats.wil`} htmlType="number" center styles={'w-12'} value={pet.stats.wil} />
                        </div>
                        <div className="flex space-x-0.5">
                            <InputField label={{text: 'spécial', icon: <SpecialIcon />}} name={`pets.${index}.speDesc`} styles={'w-full'} />
                            <StaticField name={`pets.${index}.stats.spe`} htmlType="number" center styles={'w-12'} value={pet.stats.spe} />
                        </div>
                    </div>
                </div>
            </DropdownItem>
        </DeletableItem>
    );
}

Pet.propTypes = {
    index: PropTypes.number.isRequired,
    deleteMode: PropTypes.bool.isRequired,
};
