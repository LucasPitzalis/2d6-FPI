import PropTypes from 'prop-types';

export default function FieldLabel({ name, label }) {
    return (
        <label className="bg-black text-white p-1 font-bold text-center" htmlFor={name}>{label.toUpperCase()}</label>
    );
}

FieldLabel.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

