import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../actions/contacts';
import IconButton from '../buttons/IconButton';
import LockedInput from '../fields/LockedInput';

export default function Contact({ contact, type, index, deleteMode }) {
    const dispatch = useDispatch();
    const [highlight, setHighlight] = useState(false);

    return (
        <div className={`relative flex space-x-1 ${highlight ? 'p-0.5 border-2 border-red-500' : ''}`}>
            {
                Object.keys(contact)
                    .filter((key) => key !== 'id')
                    .map((key) => <LockedInput key={key} name={`contacts.${type}.${index}.${key}`} styles={'w-1/4'} multiline />)
            }
            {deleteMode && 
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group/delete" 
                    onMouseOver={() => setHighlight(true)}
                    onMouseOut={() => setHighlight(false)}
                >
                    <IconButton styles={'bg-red-500 p-1 text-white hover:scale-110'} size={15} handler={() => dispatch(deleteContact(type, index))} icon="delete" />
                </div>
            }
        </div>
    );
}


Contact.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        function: PropTypes.string.isRequired,
        aptitudes: PropTypes.string.isRequired,
        conditions: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    deleteMode: PropTypes.bool.isRequired,
};
