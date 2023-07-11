import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../actions/contacts';
import HoverableButton from '../buttons/HoverableButton';
import Contact from './Contact';

export default function ContactList({ type }) {
    const headerStyles = 'bg-black rounded font-bold text-white w-1/4 text-center text-base truncate p-1';
    const list = useSelector((state) => state.contacts[type]);
    const dispatch = useDispatch();

    function renderList() {
        let contact;
        const renderedList = [];
        for (let i = 0; i < list.length; i++) {
            contact = list[i];
            renderedList.push(<Contact type={type} index={i} contact={contact} key={`${type}${contact.id}`} />); 
        }
        return renderedList;
    }

    return (
        <div className="flex flex-col space-y-1">
            <div className="flex w-full space-x-1">
                <span className={headerStyles}>NOM</span>
                <span className={headerStyles}>FONCTION</span>
                <span className={headerStyles}>APTITUDES</span>
                <span className={headerStyles}>CONDITIONS</span>
            </div>
            <div className="flex flex-col space-y-1">
                {renderList()}
            </div>
            <div className="flex justify-left space-x-2 items-center">
                <HoverableButton icon="+" handler={() => dispatch(addContact(type))} />
                <span>Ajouter un contact dans cette catégorie</span>
            </div>
        </div>
    );
}

ContactList.propTypes = {
    type: PropTypes.string.isRequired,
};
