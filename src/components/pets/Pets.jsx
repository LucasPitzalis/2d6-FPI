import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPet } from "../../actions/pets";
import HoverableButton from "../buttons/HoverableButton";
import SimpleButton from "../buttons/SimpleButton";
import SectionTitle from "../SectionTitle";
import Pet from "./Pet";

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

    return (
        <>
            <div className="flex flex-col">
                <SectionTitle title="Familiers et PNJ" />
                {renderList()}
                <div className="flex justify-left space-x-1 mt-2 items-center">
                    <HoverableButton icon="+" handler={() => dispatch(addNewPet())} />
                    <span>Ajouter un familier/PNJ</span>
                </div>
            </div>
                <div className="flex flex-wrap mt-1 justify-center space-x-2">
                <div className="relative">
                    <SimpleButton
                        handler={() => setDeleteMode(!deleteMode)} 
                        text={deleteMode ? 'Désactiver le mode suppression' : 'Supprimer un élément'} 
                        background={deleteMode ? 'bg-red-500' : 'bg-teal-800'}
                    />
                </div>
            </div>
        </>
    );
}
