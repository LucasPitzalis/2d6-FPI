import PropTypes from 'prop-types';
import LockedInput from './LockedInput';

export default function SheetField({label, name, reducer, htmlType, controlType}) {
    return (
        <div className="border-2 border-black rounded flex">
            <label className="bg-black text-white p-1 font-bold" htmlFor={name}>{label.toUpperCase()}</label>
            {controlType === 'locked' && <LockedInput {...{name, reducer, htmlType}} />}
        </div>
    );
}

SheetField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    reducer: PropTypes.string.isRequired,
    htmlType: PropTypes.string,
    controlType: PropTypes.string,
}

SheetField.defaultProps = {
    htmlType: 'text',
    controlType: 'locked',
}