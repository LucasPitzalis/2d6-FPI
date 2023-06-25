import PropTypes from 'prop-types';

ValidateIcon.propTypes = {
    size: PropTypes.number,
};

ValidateIcon.defaultProps = {
    size: 3,
}

export default function ValidateIcon({ size }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-${size} h-${size}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    );
}
