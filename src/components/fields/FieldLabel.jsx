import PropTypes from 'prop-types';

export default function FieldLabel({ name, label }) {
    return (
        <label className="bg-black text-white p-1 font-bold text-center flex items-center" htmlFor={name}><span>{label.toUpperCase()}</span></label>
    );
}

FieldLabel.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

