import PropTypes from 'prop-types';

export default function FieldLabel({ name, label, vertical }) {
    return (
        <label 
            className={`bg-black text-white p-1 font-bold h-full flex items-center justify-center ${vertical ? 'w-full' : ''}`} 
            htmlFor={name}
        >
            {label.toUpperCase()}
        </label>
    );
}

FieldLabel.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    vertical: PropTypes.bool,
};

FieldLabel.defaultProps = {
    vertical: false,
}
