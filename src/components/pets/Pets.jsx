import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "../../actions/app";
import { addNewPet } from "../../actions/pets";
import { getLevel } from "../../data/levels";
import HoverableButton from "../buttons/HoverableButton";
import SimpleButton from "../buttons/SimpleButton";
import SectionTitle from "../SectionTitle";
import Warning from "../ui-elements/Warning";
import Pet from "./Pet";
import { sumProperties } from "../../utils/functions";
import { petPoints } from "../../features/petStats";

export default function Pets() {
    const pets = useSelector((state) => state.pets);
    const [deleteMode, setDeleteMode] = useState(false);
    const dispatch = useDispatch();

    function renderList() {
        const renderedList = [];
        for (let i = 0; i < pets.length; i++) {
            renderedList.push(<Pet pet={pets[i]} index={i} key={`pet${i}`} deleteMode={deleteMode} />); 
        }
        return renderedList;
    }

    useEffect(() => {
        if(pets.length === 0 && deleteMode) setDeleteMode(false);
    }, [pets.length, deleteMode]);

    const petsWithPendingRolls = () => {
        const petIndexes = [];
        for(let i = 0; i < pets.length; i++) {
            const pet = pets[i];
            if(pet.levelRolls.length < getLevel(pet.experience, true).level) petIndexes.push(i);
        }
        return petIndexes;
    }

    const petsWithPendingPoints = () => {
        const petIndexes = [];
        for(let i = 0; i < pets.length; i++) {
            const pet = pets[i];
            if(sumProperties(pet.stats) < pet.levelRolls.reduce((sum, roll) => sum + roll.hpEp + roll.skill, 0)) petIndexes.push(i);
        }
        return petIndexes;
    }

    const petsWithInvalidDistrib = () => {
        const petIndexes = [];
        for(let i = 0; i < pets.length; i++) {
            const pet = pets[i];
            const { maxHp, maxEp, atk, def, wil, spe } = pet.stats;
            if(
                maxHp > getLevel(pet.experience, true).hpEpLimit ||
                maxEp > getLevel(pet.experience, true).hpEpLimit ||
                maxHp + maxEp > petPoints(i).hpEpPts.total ||
                atk > getLevel(pet.experience, true).skillLimit ||
                def > getLevel(pet.experience, true).skillLimit ||
                wil > getLevel(pet.experience, true).skillLimit ||
                spe > getLevel(pet.experience, true).skillLimit ||
                atk + def + wil + spe > petPoints(i).skillPts.total
            ) petIndexes.push(i);
        }
        return petIndexes;
    }

    return (
        <>
            <div className="flex flex-col">
                <SectionTitle title="Familiers" />
                {renderList()}
                <div className="flex justify-left space-x-1 mt-2 items-center">
                    <HoverableButton icon="+" handler={() => dispatch(addNewPet())} />
                    <span>Ajouter un familier</span>
                </div>
            </div>
            <div className="flex flex-wrap mt-1 justify-center space-x-2">
                <SimpleButton
                    isDisabled={pets.length === 0}
                    handler={() => setDeleteMode(!deleteMode)} 
                    text={deleteMode ? 'Désactiver le mode suppression' : 'Supprimer un élément'} 
                    background={deleteMode ? 'bg-red-500' : 'bg-teal-800'}
                />
                <SimpleButton isDisabled={pets.length === 0} handler={() => dispatch(handleModal('editExperience')) } text="Editer l'expérience" />
                <div className="relative">
                    <SimpleButton 
                        isDisabled={pets.length === 0}
                        handler={() => dispatch(handleModal('editPetRolls')) } text="Jets de niveaux" 
                    />
                    {petsWithPendingRolls().length !== 0 && <Warning isFloat isRed={false} />}
                </div>
                <div className="relative">
                    <SimpleButton 
                        isDisabled={pets.length === 0}
                        handler={() => dispatch(handleModal('editPetAbilities')) } text="Distribution des points" 
                    />
                    {petsWithPendingPoints().length + petsWithInvalidDistrib().length !== 0 && <Warning isFloat isRed={petsWithInvalidDistrib().length !== 0} />}
                </div>
            </div>
        </>
    );
}
