import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editChar } from '../../actions/character';
import FieldLabel from '../FieldLabel';
import SheetField from '../SheetField';
import { noArrows } from '../../utils/styles';
import { useEffect } from 'react';
import SimpleButton from '../buttons/SimpleButton';


export default function LockedInput({label, name, htmlType, isTitle, styles, vertical}) {
    const [locked, changeLocked] = useState(true);
    const dispatch = useDispatch();
    const storedValue = useSelector((state) => state.character[name]);
    const ref = useRef(null);

    const [currentValue, setCurrentValue] = useState(storedValue);

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(editChar(e.target.firstChild));
        changeLocked(true);
    };

    useEffect(() => {
        if (locked === false) ref.current.focus();
    }, [locked]);

    return (
        <SheetField {...{isTitle, styles, vertical}} >
            <FieldLabel {...{label, name}} />
            <form className="group relative flex flex-1">
                <input 
                    ref={ref}
                    className={`p-1 w-0 flex-1 ${htmlType === 'number' && `text-center ${noArrows}`}`} 
                    type={htmlType} step="1" name={name} disabled={locked}
                    value={currentValue} onChange={(e) => setCurrentValue(e.target.value)}
                />
                <div className="absolute right-0">
                    {locked && <SimpleButton hidden size={15} handler={() => changeLocked(false)} icon="edit" />}
                    {!locked &&
                        <div>
                            <SimpleButton size={15} handler={handleSave} icon="validate" />
                            <SimpleButton size={15} handler={() => changeLocked(true)} icon="close" />
                        </div>
                    }
                </div>
            </form>
        </SheetField>
    );
}

LockedInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    htmlType: PropTypes.string,
    isTitle: PropTypes.bool,
    styles: PropTypes.string,
    vertical: PropTypes.bool,
}

LockedInput.defaultProps = {
    htmlType: 'text',
    isTitle: false,
    styles: '',
    vertical: false,
}
