import PropTypes from 'prop-types';
import LockedInput from './LockedInput';

export default function SheetField({label, name, reducer, htmlType, controlType, isTitle, styles, vertical}) {
    return (
        <div className={`border-2 border-black rounded flex ${isTitle && "text-base"} ${styles} ${vertical && "flex-col"}`}>
            <label className="bg-black text-white p-1 font-bold text-center" htmlFor={name}>{label.toUpperCase()}</label>
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
    isTitle: PropTypes.bool,
    styles: PropTypes.string,
    vertical: PropTypes.bool,
}

SheetField.defaultProps = {
    htmlType: 'text',
    controlType: 'locked',
    isTitle: false,
    styles: '',
    vertical: false,
}