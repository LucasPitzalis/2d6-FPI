import PropTypes from 'prop-types';

export default function HInput({label, name, type}) {
    return (
        <div className="border-2 border-black rounded flex">
            <label className="bg-black text-white p-1 font-bold" htmlFor={name}>{label.toUpperCase()}</label>
            <input className="grow p-1" type={type} name={name} />
        </div>
    );
}

HInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
}

HInput.defaultProps = {
    type: "text",
}