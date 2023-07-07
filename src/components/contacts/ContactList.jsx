import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from '../../actions/contacts';
import HoverableButton from '../buttons/HoverableButton';
import IconButton from '../buttons/IconButton';
import LockedInput from '../fields/LockedInput';

export default function ContactList({ type }) {
    const headerStyles = 'bg-black rounded font-bold text-white w-1/4 text-center text-base truncate p-1';
    const list = useSelector((state) => state.contacts[type]);
    const dispatch = useDispatch();

    function renderList() {
        let contact;
        const renderedList = [];
        for (let i = 0; i < list.length; i++) {
            contact = list[i];
            const id = contact.id;
            renderedList.push((
                <div className="group/item relative flex space-x-1" key={`${type}${id}`}>
                    {
                       Object.keys(contact)
                           .filter((key) => key !== 'id')
                           .map((key) => <LockedInput key={key} name={`contacts.${type}.${i}.${key}`} styles={'w-1/4'} />)
                    }
                    <div className="absolute top-1 -left-6 hidden group-hover/item:block">
                        <IconButton hidden size={15} handler={() => dispatch(deleteContact(type, id))} icon="delete" group={'item'} />
                    </div>
                </div>
            )) 
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
