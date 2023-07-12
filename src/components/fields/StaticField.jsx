import PropTypes from 'prop-types';
import FieldLabel from './FieldLabel';
import SheetField from './SheetField';

export default function StaticField({ name, label, value, isTitle, styles, vertical }) {
    return (
        <SheetField {...{isTitle, styles, vertical}}>
            {label !=='' && <FieldLabel { ...{name, label, vertical}}/>}
            <p className={`flex-1 p-1 ${typeof(value) === 'number' ? 'text-center' : ''}`}>{ value }</p>
        </SheetField>
    );
}

StaticField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    isTitle: PropTypes.bool,
    styles: PropTypes.string,
    vertical: PropTypes.bool,
};


StaticField.defaultProps = {
    label: '',
    isTitle: false,
    styles: '',
    vertical: false,
}