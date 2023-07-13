import PropTypes from 'prop-types';

export default function FieldLabel({ name, label, vertical, styles }) {
    return (
        <label 
            className={`bg-black text-white p-1 font-bold flex items-center justify-center ${vertical ? 'w-full' : ''} ${styles}`} 
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
    styles: PropTypes.string,
};

FieldLabel.defaultProps = {
    vertical: false,
    styles: '',
}
