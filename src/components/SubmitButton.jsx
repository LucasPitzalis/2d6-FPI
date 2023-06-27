import PropTypes from 'prop-types';

export default function SubmitButton({ text, isDisabled }) {
    return (
        <button 
            type="submit"
            className="rounded-full bg-teal-800 font-bold mt-2 text-white py-1 px-3 
                outline hover:outline-2 hover:outline-amber-500
                disabled:outline-none disabled:bg-gray-500 disabled:italic disabled:font-normal"
            disabled={isDisabled}
        >
            { text }
        </button>
    );
}

SubmitButton.propTypes = {
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
};

SubmitButton.defaultProps = {
    isDisabled: false,
}
