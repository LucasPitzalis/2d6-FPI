import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../actions/contacts';
import DeletableItem from '../context/DeletableItem';
import InputField from '../fields/InputField';

export default function Contact({ contact, type, index, deleteMode }) {
    const dispatch = useDispatch();

    return (
        <DeletableItem handler={() => dispatch(deleteContact(type, index))} deleteMode={deleteMode} styles="space-x-1">
        {
            Object.keys(contact)
                .filter((key) => key !== 'id')
                .map((key) => <InputField key={key} name={`contacts.${type}.${index}.${key}`} styles={'w-1/4'} multiline={2} />)
        }
        </DeletableItem>
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
