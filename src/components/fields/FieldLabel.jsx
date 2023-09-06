import PropTypes from 'prop-types';

export default function FieldLabel({ name, label, vertical, styles }) {
    return (
        <label 
            className={`bg-black text-white p-1 font-bold flex items-center justify-center space-x-2 h-full ${vertical ? 'w-full' : ''} ${styles}`} 
            htmlFor={name}
        >
            <span className="truncate">
                {typeof(label) === 'string'
                    ? label.toUpperCase()
                    : label.text.toUpperCase()
                }
            </span>
            {label.icon && 
                <span className='pb-1'>
                    {label.icon}
                </span>
            }
        </label>
    );
}

FieldLabel.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            icon: PropTypes.object,
        }),
        PropTypes.string,
    ]).isRequired,
    vertical: PropTypes.bool,
    styles: PropTypes.string,
};

FieldLabel.defaultProps = {
    vertical: false,
    styles: '',
}
