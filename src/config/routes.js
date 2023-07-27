import Character from "../components/character/Character";
import Contacts from "../components/contacts/Contacts";
import CoverLetter from "../components/coverLetter/CoverLetter";
import Items from "../components/items/Items";
import Pets from "../components/pets/Pets";
import Skills from "../components/skills/Skills";

const routes = [
    {name: 'main', nameFr: 'Fiche principale', path: '/', element: Character, sheet: true},
    {name: 'skills', nameFr: 'Compétences', path: '/competences', element: Skills, sheet: true},
    {name: 'contacts', nameFr: 'Contacts', path: '/contacts', element: Contacts, sheet: true},
    {name: 'items', nameFr: 'Objets', path: '/objets', element: Items, sheet: true},
    // {name: 'pets', nameFr: 'Familiers', path: '/familier', element: Pets, sheet: true},
    {name: 'coverLetter', nameFr: 'Lettre de motivation', path: '/lettre-de-motivation', element: CoverLetter, sheet: true},
]

export default routes;