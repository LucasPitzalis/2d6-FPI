import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../actions/contacts';
import IconButton from '../buttons/IconButton';
import LockedInput from '../fields/LockedInput';

export default function Contact({ contact, type, index }) {
    const dispatch = useDispatch();

    return (
        <div className="group/item relative flex space-x-1">
            {
                Object.keys(contact)
                    .filter((key) => key !== 'id')
                    .map((key) => <LockedInput key={key} name={`contacts.${type}.${index}.${key}`} styles={'w-1/4'} multiline />)
            }
            <div className="absolute top-1 -left-6 hidden group-hover/item:block">
                <IconButton hidden size={15} handler={() => dispatch(deleteContact(type, index))} icon="delete" group={'item'} />
            </div>
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
};
