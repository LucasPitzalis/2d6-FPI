import Character from "../components/character/Character";
import Contacts from "../components/contacts/Contacts";

const routes = [
    {name: 'main', nameFr: 'Fiche principale', path: '/', element: Character},
    {name: 'contacts', nameFr: 'Contacts', path: '/contacts', element: Contacts},
]

export default routes;