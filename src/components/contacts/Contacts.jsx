import { useState } from "react";
import SimpleButton from "../buttons/SimpleButton";
import SectionTitle from "../SectionTitle";
import ContactList from "./ContactList";

export default function Contacts() {
    const [deleteMode, setDeleteMode] = useState(false);

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
                        handler={() => setDeleteMode(!deleteMode)} 
                        text={`${deleteMode ? 'Désactiver' : 'Activer'} le mode suppression`} 
                        background={deleteMode ? 'bg-red-500' : 'bg-teal-800'}
                    />
                </div>
            </div>
        </>
    );
}
