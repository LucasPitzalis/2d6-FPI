import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { editField } from '../../actions/app';
import { getProperty } from '../../utils/functions';
import FieldLabel from './FieldLabel';
import SheetField from './SheetField';

export default function DirectInput({name, htmlType, isTitle, styles, vertical, label, limit}) {
    const dispatch = useDispatch();
    const stateValue = useSelector((state) => getProperty(state, name));

    const handleChange = (e) => {
        if (htmlType === 'number' && e.target.value > limit) return;
        dispatch(editField(e.target));
    };

    return (
        <SheetField {...{isTitle, styles, vertical}} >
            {label && <FieldLabel {...{label, name}} />}
            <div className="flex">
                <input className={`p-1 w-0 flex-1 ${htmlType === 'number' && 'text-center'}`} type={htmlType} step="1" name={name} value={htmlType === "number" ? Number(stateValue) : stateValue} onChange={(e) => handleChange(e)}/>
                {limit !== null && <span className="leading-5 font-bold italic p-1">/ { limit }</span>}
            </div>
        </SheetField>
    );
}

DirectInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    htmlType: PropTypes.string,
    isTitle: PropTypes.bool,
    styles: PropTypes.string,
    vertical: PropTypes.bool,
    limit: PropTypes.number,
}

DirectInput.defaultProps = {
    label: false,
    htmlType: 'text',
    isTitle: false,
    styles: '',
    vertical: false,
    limit: null,
}