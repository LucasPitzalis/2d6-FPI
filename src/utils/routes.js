import Character from "../components/character/Character";
import Contacts from "../components/contacts/Contacts";
import Skills from "../components/skills/Skills";

const routes = [
    {name: 'main', nameFr: 'Fiche principale', path: '/', element: Character},
    {name: 'skills', nameFr: 'Compétences', path: '/competences', element: Skills},
    {name: 'contacts', nameFr: 'Contacts', path: '/contacts', element: Contacts},
]

export default routes;