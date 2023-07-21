import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editField } from '../../actions/app';
import FieldLabel from './FieldLabel';
import SheetField from './SheetField';
import { noArrows } from '../../utils/styles';
import { useEffect } from 'react';
import IconButton from '../buttons/IconButton';
import { getProperty } from '../../utils/functions';


export default function LockedInput({ label, name, htmlType, isTitle, styles, vertical, regex, center, multiline }) {
    const [locked, changeLocked] = useState(true);
    const dispatch = useDispatch();
    const storedValue = useSelector((state) => getProperty(state, name));
    const ref = useRef(null);

    const [currentValue, setCurrentValue] = useState(storedValue);

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(editField({name: name, value: htmlType === "number" ? Number(currentValue) : currentValue}));
        changeLocked(true);
    };

    const handleCancel = () => {
        changeLocked(true);
        setCurrentValue(storedValue);
    }

    useEffect(() => {
        if (locked === false) ref.current.focus();
    }, [locked]);

    function getLabel() {
        if (label !== '') return <FieldLabel {...{label, name, vertical, styles: multiline ? 'h-full' : ''}} />;
    }

    const inputProps = {
        ref: ref,
        rows: 2,
        className: `min-h-fit p-1 w-0 flex-1 ${htmlType === 'number' ? noArrows : ''} ${center ? 'text-center' : ''}`, 
        type: htmlType, step: "1", name: name, disabled: locked,
        value: locked ? storedValue : currentValue, onChange: (e) => regex.test(e.target.value) && setCurrentValue(e.target.value),
    }

    return (
        <SheetField {...{isTitle, styles, vertical}} >
            {getLabel()}
            <form className="group/edit relative flex flex-1">
                {multiline ? <textarea {...inputProps} /> : <input {...inputProps} />}
                <div className="absolute right-0 hidden group-hover/edit:block">
                    {locked && <IconButton hidden size={15} handler={() => changeLocked(false)} icon="edit" />}
                    {!locked &&
                        <div>
                            <IconButton size={15} handler={handleSave} icon="validate" />
                            <IconButton size={15} handler={handleCancel} icon="close" />
                        </div>
                    }
                </div>
            </form>
        </SheetField>
    );
}

LockedInput.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            icon: PropTypes.object,
        }),
        PropTypes.string,
    ]).isRequired,
    name: PropTypes.string.isRequired,
    htmlType: PropTypes.string,
    isTitle: PropTypes.bool,
    styles: PropTypes.string,
    vertical: PropTypes.bool,
    regex: PropTypes.instanceOf(RegExp),
    center: PropTypes.bool,
    multiline: PropTypes.bool,
}

LockedInput.defaultProps = {
    htmlType: 'text',
    isTitle: false,
    vertical: false,
    center: false,
    regex: /.*/,
    multiline: false,
}
