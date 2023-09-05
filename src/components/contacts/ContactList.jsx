import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../actions/contacts';
import HoverableButton from '../buttons/HoverableButton';
import DropdownItem from '../context/DropdownItem';
import Contact from './Contact';

export default function ContactList({ type, deleteMode }) {
    const headerStyles = 'bg-black rounded font-bold text-white w-1/4 text-center text-base truncate p-1';
    const list = useSelector((state) => state.contacts[type]);
    const dispatch = useDispatch();

    function getListNameFr() {
        let listNameFr;
        switch (type) {
            case 'relatives': listNameFr = 'famille'; break;
            case 'friends': listNameFr = 'amis'; break;
            case 'enemies': listNameFr = 'ennemis'; break;
            default: break;
        }
        return listNameFr.toUpperCase();
    }

    function renderList() {
        let contact;
        const renderedList = [];
        for (let i = 0; i < list.length; i++) {
            contact = list[i];
            renderedList.push(<Contact type={type} index={i} contact={contact} key={`${type}${i}`} deleteMode={deleteMode} />); 
        }
        return renderedList;
    }

    return (
        <DropdownItem defaultOpen header={
            <span className="text-white text-base pl-1">{getListNameFr()} {list.length !== 0 ? ` (${list.length})` : ''}</span>
        }>
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
        </DropdownItem>
    );
}

ContactList.propTypes = {
    type: PropTypes.string.isRequired,
    deleteMode: PropTypes.bool.isRequired,
};
