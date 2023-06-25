import PropTypes from 'prop-types';
import FieldLabel from '../FieldLabel';
import LabelledField from '../LabelledField';

export default function StaticField({ name, label, value ,isTitle, styles, vertical }) {
    return (
        <LabelledField {...{isTitle, styles, vertical}}>
            <FieldLabel { ...{name, label}}/>
            <p className={`p-1 ${typeof(value) === 'number' && 'text-center'}`}>{ value }</p>
        </LabelledField>
    );
}

StaticField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    isTitle: PropTypes.bool,
    styles: PropTypes.string,
    vertical: PropTypes.bool,
};


StaticField.defaultProps = {
    isTitle: false,
    styles: '',
    vertical: false,
}