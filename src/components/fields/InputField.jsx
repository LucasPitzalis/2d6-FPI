import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { editField } from '../../actions/app';
import FieldLabel from './FieldLabel';
import SheetField from './SheetField';
import { getProperty } from '../../utils/functions';


export default function InputField({ 
    label, name, htmlType, 
    isTitle, styles, vertical, 
    regex, center, multiline, 
    prefix, suffix, checkCondition, 
    placeHolder, labelStyles 
}) {
    const dispatch = useDispatch();
    const currentValue = useSelector((state) => getProperty(state, name));

    const handleChange = (e) => {
        e.preventDefault();
        dispatch(editField({name: name, value: htmlType === "number" ? Number(e.target.value) : e.target.value}));
    };

    const inputProps = {
        rows: 2,
        className: `p-1 w-full flex-1 ${center ? 'text-center' : ''}`, 
        type: htmlType, step: "1", name: name,
        value: currentValue, onChange: (e) => regex.test(e.target.value) && checkCondition(e.target.value) && handleChange(e),
        placeholder: placeHolder,
    }

    return (
        <SheetField {...{isTitle, styles, vertical}} >
            {label && <FieldLabel {...{label, name, vertical, styles: labelStyles}} />}
            <form className="group/edit relative flex flex-1 h-full justify-center items-center space-x-1 w-full" onSubmit={(e) => e.preventDefault()}>
                {prefix && <span className="leading-5 ml-2">{ prefix }</span>}
                {multiline ? <textarea {...inputProps} rows={multiline} /> : <input {...inputProps}/>}
                {suffix && <span className="leading-5 font-bold italic p-1">{ suffix }</span>}
            </form>
        </SheetField>
    );
}

InputField.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            icon: PropTypes.object,
        }),
        PropTypes.string,
    ]),
    name: PropTypes.string.isRequired,
    htmlType: PropTypes.string,
    isTitle: PropTypes.bool,
    styles: PropTypes.string,
    labelStyles: PropTypes.string,
    vertical: PropTypes.bool,
    regex: PropTypes.instanceOf(RegExp),
    center: PropTypes.bool,
    multiline: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]),
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    checkCondition: PropTypes.func,
    placeHolder: PropTypes.string,
}

InputField.defaultProps = {
    htmlType: 'text',
    isTitle: false,
    vertical: false,
    center: false,
    regex: /.*/,
    multiline: false,
    checkCondition: () => true,
    placeHolder: '',
}
