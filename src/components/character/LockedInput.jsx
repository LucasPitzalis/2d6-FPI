import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editChar } from '../../actions/character';
import CancelIcon from '../../icons/CancelIcon';
import EditIcon from '../../icons/EditIcon';
import ValidateIcon from '../../icons/ValidateIcon';
import FieldLabel from '../FieldLabel';
import SheetField from '../SheetField';
import { noArrows } from '../../utils/styles';

export default function LockedInput({label, name, htmlType, isTitle, styles, vertical}) {
    const [locked, changeLocked] = useState(true);
    const dispatch = useDispatch();
    const storedValue = useSelector((state) => state.character[name]);

    const [currentValue, setCurrentValue] = useState(storedValue);

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(editChar(e.target.firstChild));
        changeLocked(true);
    };

    return (
        <SheetField {...{isTitle, styles, vertical}} >
            <FieldLabel {...{label, name}} />
            <form className="group relative flex flex-1" onSubmit={handleSave}>
                <input className={`p-1 w-0 flex-1 ${htmlType === 'number' && `text-center ${noArrows}`}`} type={htmlType} step="1" name={name} disabled={locked} value={currentValue} onChange={(e) => setCurrentValue(e.target.value)}/>
                <div className="hidden group-hover:block absolute right-0">
                    {locked && <button onClick={() => changeLocked(false)}><EditIcon /></button>}
                    {!locked &&
                        <div>
                            <button type="submit"><ValidateIcon /></button>
                            <button onClick={() => changeLocked(true)}><CancelIcon /></button>
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
