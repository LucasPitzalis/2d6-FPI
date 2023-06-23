import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editSheet } from '../actions/sheet';
import CancelIcon from '../icons/CancelIcon';
import EditIcon from '../icons/EditIcon';
import ValidateIcon from '../icons/ValidateIcon';

export default function LockedInput({name, htmlType, reducer}) {
    const [locked, changeLocked] = useState(true);
    const dispatch = useDispatch();
    const storedValue = useSelector((state) => state[reducer][name]);

    const [currentValue, setCurrentValue] = useState(storedValue);

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(editSheet(e.target.firstChild, reducer));
        changeLocked(true);
    };

    return (
        <form className="group relative flex flex-1" onSubmit={handleSave}>
            <input className="p-1 w-0 flex-1" type={htmlType} name={name} disabled={locked} value={currentValue} onChange={(e) => setCurrentValue(e.target.value)}/>
            {<div className="hidden group-hover:block absolute right-0">
                    {locked && <button onClick={() => changeLocked(false)}><EditIcon /></button>}
                    {!locked &&
                        <div>
                            <button type="submit"><ValidateIcon /></button>
                            <button onClick={() => changeLocked(true)}><CancelIcon /></button>
                        </div>
                    }
                </div>
            }
        </form>
    );
}

LockedInput.propTypes = {
    reducer: PropTypes.string.isRequired,
    htmlType: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
