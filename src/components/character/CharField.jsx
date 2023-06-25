import PropTypes from 'prop-types';
import FieldLabel from '../FieldLabel';
import LabelledField from '../LabelledField';
import LockedInput from './LockedInput';

export default function CharField({label, name, htmlType, controlType, isTitle, styles, vertical}) {
    return (
        <LabelledField {...{isTitle, styles, vertical}} >
            <FieldLabel {...{label, name}} />
            {controlType === 'locked' && <LockedInput {...{name, htmlType}} />}
        </LabelledField>
    );
}

CharField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    htmlType: PropTypes.string,
    controlType: PropTypes.string,
    isTitle: PropTypes.bool,
    styles: PropTypes.string,
    vertical: PropTypes.bool,
}

CharField.defaultProps = {
    htmlType: 'text',
    controlType: 'locked',
    isTitle: false,
    styles: '',
    vertical: false,
}