import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { editChar } from '../../actions/character';
import FieldLabel from '../FieldLabel';
import SheetField from '../SheetField';

export default function DirectInput({name, htmlType, isTitle, styles, vertical, label, limit}) {
    const dispatch = useDispatch();
    const stateValue = useSelector((state) => state.character[name]);

    const handleChange = (e) => {
        if (htmlType === 'number' && e.target.value > limit) return;
        dispatch(editChar(e.target));
    };

    return (
        <SheetField {...{isTitle, styles, vertical}} >
            <FieldLabel {...{label, name}} />
            <div className="flex">
                <input className={`p-1 w-0 flex-1 ${htmlType === 'number' && 'text-center'}`} type={htmlType} step="1" name={name} value={stateValue} onChange={(e) => handleChange(e)}/>
                {limit && <span className="leading-5 font-bold italic p-1">/ { limit }</span>}
            </div>
        </SheetField>
    );
}

DirectInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    htmlType: PropTypes.string,
    isTitle: PropTypes.bool,
    styles: PropTypes.string,
    vertical: PropTypes.bool,
    limit: PropTypes.number,
}

DirectInput.defaultProps = {
    htmlType: 'text',
    isTitle: false,
    styles: '',
    vertical: false,
}