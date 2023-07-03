import PropTypes from 'prop-types';

export default function SimpleButton({ text, isDisabled, btnType, handler }) {
    return (
        <button 
            type={btnType}
            className="rounded-full bg-teal-800 font-bold mt-2 text-white py-1 px-3 
                outline hover:outline-2 hover:outline-amber-500
                disabled:outline-none disabled:bg-gray-500 disabled:italic disabled:font-normal"
            disabled={isDisabled}
            onClick={handler}
        >
            { text }
        </button>
    );
}

SimpleButton.propTypes = {
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    btnType: PropTypes.string,
    handler: PropTypes.func,
};

SimpleButton.defaultProps = {
    isDisabled: false,
    btnType: 'button',
}
