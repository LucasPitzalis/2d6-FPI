import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { editField } from '../../actions/app';
import { getProperty } from '../../utils/functions';

export default function LetterField({text, name}) {
    const dispatch = useDispatch();
    const stateValue = useSelector((state) => getProperty(state, `letter.${name}`));

    const handleChange = (e) => {
        dispatch(editField(e.target));
    };

    return (
        <div className="flex justify-center w-full flex-col lg:flex-row lg:items-center">
            <span>{text}</span>
            <input 
                className="p-1 flex-1 font-bold" placeholder="..."
                value={stateValue} onChange={(e) => handleChange(e)}
                name={`letter.${name}`}
            />
        </div>
    );
}


LetterField.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};