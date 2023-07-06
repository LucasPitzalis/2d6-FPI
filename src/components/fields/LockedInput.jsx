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


export default function LockedInput({label, name, htmlType, isTitle, styles, vertical, regex, center }) {
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

    return (
        <SheetField {...{isTitle, styles, vertical}} >
            {label && <FieldLabel {...{label, name}} />}
            <form className="group relative flex flex-1">
                <input 
                    ref={ref}
                    className={`p-1 w-0 flex-1 ${htmlType === 'number' && noArrows} ${center && 'text-center'}`} 
                    type={htmlType} step="1" name={name} disabled={locked}
                    value={locked ? storedValue : currentValue} onChange={(e) => regex.test(e.target.value) && setCurrentValue(e.target.value)}
                />
                <div className="absolute right-0">
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
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    htmlType: PropTypes.string,
    isTitle: PropTypes.bool,
    styles: PropTypes.string,
    vertical: PropTypes.bool,
    regex: PropTypes.instanceOf(RegExp),
    center: PropTypes.bool,
}

LockedInput.defaultProps = {
    label: false,
    htmlType: 'text',
    isTitle: false,
    styles: '',
    vertical: false,
    center: false,
    regex: /.*/,
}
