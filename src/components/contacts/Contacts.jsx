import SectionTitle from "../SectionTitle";
import ContactList from "./ContactList";

export default function Contacts() {
    return (
        <div className="flex space-y-2 flex-col">
            <SectionTitle title="Contacts" />
            <SectionTitle title="Famille" />
            <ContactList type="relative" />
            <SectionTitle title="amis" />
            <SectionTitle title="ennemis" />
        </div>
    );
}
