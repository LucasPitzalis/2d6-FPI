import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SimpleButton from "../buttons/SimpleButton";
import SectionTitle from "../SectionTitle";
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
            <div className="flex space-y-2 flex-col">
                <SectionTitle title="Contacts" />
                <SectionTitle title="Famille" />
                <ContactList type="relatives" deleteMode={deleteMode} />
                <SectionTitle title="amis" />
                <ContactList type="friends" deleteMode={deleteMode} />
                <SectionTitle title="ennemis" />
                <ContactList type="enemies" deleteMode={deleteMode} />
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
