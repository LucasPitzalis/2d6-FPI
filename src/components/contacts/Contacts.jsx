import SectionTitle from "../SectionTitle";
import ContactList from "./ContactList";

export default function Contacts() {
    return (
        <div className="flex space-y-2 flex-col">
            <SectionTitle title="Contacts" />
            <SectionTitle title="Famille" />
            <ContactList type="relatives" />
            <SectionTitle title="amis" />
            <ContactList type="friends" />
            <SectionTitle title="ennemis" />
            <ContactList type="enemies" />
        </div>
    );
}
