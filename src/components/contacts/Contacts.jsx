import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SimpleButton from "../buttons/SimpleButton";
import SectionTitle from "../SectionTitle";
import ContactList from "./ContactList";

export default function Contacts() {
    const [deleteMode, setDeleteMode] = useState(false);
    const contacts = useSelector((state) => state.contacts);
    const contactsAmount = contacts.relatives.length + contacts.friends.length + contacts.enemies.length;

    useEffect(() => {
        if(contactsAmount === 0 && deleteMode) setDeleteMode(false);
    }, [contactsAmount, deleteMode]);

    return (
        <>
            <div className="flex flex-col">
                <SectionTitle title="Contacts" />
                <div className="mt-2 space-y-1 flex flex-col">
                    {Object.keys(contacts).map((listName) => <ContactList key={listName} type={listName} deleteMode={deleteMode} />)}
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
