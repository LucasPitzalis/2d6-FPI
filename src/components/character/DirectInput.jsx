import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { editChar } from '../../actions/character';

export default function DirectInput({name, htmlType}) {
    const dispatch = useDispatch();
    const stateValue = useSelector((state) => state.character[name]);

    const handleChange = (e) => {
        dispatch(editChar(e.target));
    };

    return (
        <input className={`p-1 w-100 ${htmlType === 'number' && 'text-center'}`} type={htmlType} name={name} value={stateValue} onChange={(e) => handleChange(e)}/>
    );
}

DirectInput.propTypes = {
    htmlType: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
