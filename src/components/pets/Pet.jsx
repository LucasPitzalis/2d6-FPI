import { useDispatch, useSelector } from "react-redux";
import LockedInput from "../fields/LockedInput";
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

export default function Pet({ pet, index, deleteMode }) {
    const dispatch = useDispatch();

    return (
        <DeletableItem 
            handler={() => dispatch(deletePet(index))}
            deleteMode={deleteMode}
            styles="flex-col py-2 space-y-0.5 border-t border-gray-400"
        >
            <div className="flex flex-col md:flex-row space-y-0.5 md:space-y-0 md:space-x-0.5">
                <div className="flex flex-col justify-between space-y-0.5 w-full md:w-1/2">
                    <div className="flex space-x-0.5">
                        <StaticField label="n°" name={`pets.${index}`} value={index + 1} styles={'w-16'} />
                        <LockedInput label="nom" name={`pets.${index}.name`} styles={'w-full'} />
                    </div>
                    <div className="flex space-x-0.5">
                        <StaticField label="niv." name={`pets.${index}.level`} value={currentPetLevel(index).level} styles={'w-40'} />
                        <LockedInput label="xp acquis" name={`pets.${index}.experience`} center styles={'w-full'} htmlType="number" />
                        <StaticField label="xp prochain" name={`pets.${index}.xpToReach`} value={currentPetLevel(index).nextLevelXp} styles={'w-full'} />
                    </div>
                </div>
                <div className="flex flex-col justify-between space-y-0.5 w-full md:w-1/2">
                    <div className="flex space-x-0.5">
                        <LockedInput label="nb. de pt. pv/pe" name={`pets.${index}.hpEpPts`} htmlType="number" center styles={'w-1/2'} />
                        <LockedInput label="pt. compétences" name={`pets.${index}.skillPts`} htmlType="number" center styles={'w-1/2'} />
                    </div>
                    <div className="flex space-x-0.5">
                        <LockedInput label="PV" name={`pets.${index}.healthPts`} htmlType="number" center styles={'w-1/3'} />
                        <LockedInput name={`pets.${index}.maxHp`} htmlType="number" center styles={'w-1/6'} />
                        <LockedInput label="PE" name={`pets.${index}.energyPts`} htmlType="number" center styles={'w-1/3'} />
                        <LockedInput name={`pets.${index}.maxEp`} htmlType="number" center styles={'w-1/6'} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-0.5 md:space-y-0 md:space-x-0.5">
                <Avatar />
                <div className="flex flex-col justify-between space-y-0.5 w-full md:w-1/2">
                    <div className="flex space-x-0.5">
                        <LockedInput label={{text: 'attaque', icon: <AttackIcon />}} name={`pets.${index}.atkDesc`} styles={'w-full'} />
                        <LockedInput name={`pets.${index}.atkValue`} htmlType="number" center styles={'w-12'} />
                    </div>
                    <div className="flex space-x-0.5">
                        <LockedInput label={{text: 'défense', icon: <DefenseIcon />}} name={`pets.${index}.defDesc`} styles={'w-full'} />
                        <LockedInput name={`pets.${index}.defValue`} htmlType="number" center styles={'w-12'} />
                    </div>
                    <div className="flex space-x-0.5">
                        <LockedInput label={{text: 'volonté', icon: <WillIcon />}} name={`pets.${index}.wilDesc`} styles={'w-full'} />
                        <LockedInput name={`pets.${index}.wilValue`} htmlType="number" center styles={'w-12'} />
                    </div>
                    <div className="flex space-x-0.5">
                        <LockedInput label={{text: 'spécial', icon: <SpecialIcon />}} name={`pets.${index}.speDesc`} styles={'w-full'} />
                        <LockedInput name={`pets.${index}.speValue`} htmlType="number" center styles={'w-12'} />
                    </div>
                </div>
            </div>
            
        </DeletableItem>
    );
}

Pet.propTypes = {
    index: PropTypes.number.isRequired,
    deleteMode: PropTypes.bool.isRequired,
};