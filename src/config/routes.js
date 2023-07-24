import Character from "../components/character/Character";
import Contacts from "../components/contacts/Contacts";
import CoverLetter from "../components/coverLetter/CoverLetter";
import Items from "../components/items/Items";
import Skills from "../components/skills/Skills";

const routes = [
    {name: 'main', nameFr: 'Fiche principale', path: '/', element: Character},
    {name: 'skills', nameFr: 'Compétences', path: '/competences', element: Skills},
    {name: 'contacts', nameFr: 'Contacts', path: '/contacts', element: Contacts},
    {name: 'items', nameFr: 'Objets', path: '/objets', element: Items},
    {name: 'coverLetter', nameFr: 'Lettre de motivation', path: '/lettre-de-motivation', element: CoverLetter},
]

export default routes;