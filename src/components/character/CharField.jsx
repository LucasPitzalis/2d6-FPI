import PropTypes from 'prop-types';
import FieldLabel from '../FieldLabel';
import LockedInput from './LockedInput';

export default function SheetField({label, name, htmlType, controlType, isTitle, styles, vertical}) {
    return (
        <div className={`border-2 border-black rounded flex ${isTitle && "text-base"} ${styles} ${vertical && "flex-col"}`}>
            <FieldLabel {...{label, name}} />
            {controlType === 'locked' && <LockedInput {...{name, htmlType}} />}
        </div>
    );
}

SheetField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
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