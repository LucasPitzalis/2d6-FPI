import PropTypes from 'prop-types';
import { useState } from 'react';
import CancelIcon from '../icons/CancelIcon';
import EditIcon from '../icons/EditIcon';
import ValidateIcon from '../icons/ValidateIcon';

export default function SheetInput({label, name, type, dynamic}) {
    const [editMode, changeEditMode] = useState(false);

    return (
        <div className="border-2 border-black rounded flex">
            <label className="bg-black text-white p-1 font-bold" htmlFor={name}>{label.toUpperCase()}</label>
            <form className="group relative flex">
                <input className="grow p-1" type={type} name={name} disabled={!dynamic && !editMode} />
                <div className="hidden group-hover:block absolute right-0">
                    {!dynamic && !editMode && <button onClick={() => changeEditMode(true)}><EditIcon /></button>}
                    {!dynamic && editMode &&
                        <div>
                            <button type="submit"><ValidateIcon /></button>
                            <button onClick={() => changeEditMode(false)}><CancelIcon /></button>
                        </div>
                    }
                </div>
            </form>
        </div>
    );
}

SheetInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    dynamic: PropTypes.bool,
}

SheetInput.defaultProps = {
    type: "text",
    dynamic: false,
}