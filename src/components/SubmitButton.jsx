import PropTypes from 'prop-types';

export default function SubmitButton({ text }) {
    return (
        <button 
            type="submit"
            className="rounded-full bg-teal-800 font-bold mt-2 text-white py-1 px-3 
                outline hover:outline-2 hover:outline-amber-500
                "
        >
            { text }
        </button>
    );
}

SubmitButton.propTypes = {
    text: PropTypes.string.isRequired,
};
