import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SimpleButton from "../buttons/SimpleButton";
import SectionTitle from "../SectionTitle";
import DropdownItem from "../context/DropdownItem";
import ContactList from "./ContactList";

export default function Contacts() {
    const [deleteMode, setDeleteMode] = useState(false);
    const {relatives, friends, enemies} = useSelector((state) => state.contacts);
    const contactsAmount = relatives.length + friends.length + enemies.length;

    useEffect(() => {
        if(contactsAmount === 0 && deleteMode) setDeleteMode(false);
    }, [contactsAmount, deleteMode]);

    return (
        <>
            <div className="flex flex-col">
                <SectionTitle title="Contacts" />
                <div className="mt-2 space-y-1 flex flex-col">
                    <DropdownItem defaultOpen header={
                        <span className="text-white text-base pl-1">{`FAMILLE${relatives.length !== 0 ? ` (${relatives.length})` : ''}`}</span>
                    }>
                        <ContactList type="relatives" deleteMode={deleteMode} />
                    </DropdownItem>
                    <DropdownItem defaultOpen header={
                        <span className="text-white text-base pl-1">{`AMIS${friends.length !== 0 ? ` (${friends.length})` : ''}`}</span>
                    }>
                        <ContactList type="friends" deleteMode={deleteMode} />
                    </DropdownItem>
                    <DropdownItem defaultOpen header={
                        <span className="text-white text-base pl-1">{`ENNEMIS${enemies.length !== 0 ? ` (${enemies.length})` : ''}`}</span>
                    }>
                        <ContactList type="enemies" deleteMode={deleteMode} />
                    </DropdownItem>
                </div>
            </div>
            <div className="flex flex-wrap mt-1 justify-center space-x-2">
                <div className="relative">
                    <SimpleButton 
                        isDisabled={contactsAmount === 0}
                        handler={() => setDeleteMode(!deleteMode)} 
                        text={deleteMode ? 'Désactiver le mode suppression' : 'Supprimer un élément'} 
                        background={deleteMode ? 'bg-red-500' : 'bg-teal-800'}
                    />
                </div>
            </div>
        </>
    );
}
