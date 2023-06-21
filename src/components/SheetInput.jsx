import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editSheet } from '../actions/sheet';
import CancelIcon from '../icons/CancelIcon';
import EditIcon from '../icons/EditIcon';
import ValidateIcon from '../icons/ValidateIcon';

export default function SheetInput({label, name, type, dynamic}) {
    const [editMode, changeEditMode] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editSheet(e.target.firstChild));
        changeEditMode(false);
    }

    return (
        <div className="border-2 border-black rounded flex">
            <label className="bg-black text-white p-1 font-bold" htmlFor={name}>{label.toUpperCase()}</label>
            <form className="group relative flex" onSubmit={handleSubmit}>
                <input className="grow p-1" type={type} name={name} disabled={!dynamic && !editMode} />
                {!dynamic &&
                    <div className="hidden group-hover:block absolute right-0">
                        {!editMode && <button onClick={() => changeEditMode(true)}><EditIcon /></button>}
                        {editMode &&
                            <div>
                                <button type="submit"><ValidateIcon /></button>
                                <button onClick={() => changeEditMode(false)}><CancelIcon /></button>
                            </div>
                        }
                    </div>
                }
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