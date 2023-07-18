import PropTypes from 'prop-types';

export default function SimpleButton({ text, isDisabled, btnType, handler, background, styles }) {
    return (
        <button 
            type={btnType}
            className={`rounded-full font-bold mt-2 text-white py-1 px-3 
                outline hover:outline-2 hover:outline-amber-500
                disabled:outline-none disabled:bg-gray-500 disabled:italic disabled:font-normal ${background} ${styles}`}
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
    styles: PropTypes.string,
    background: PropTypes.string,
};

SimpleButton.defaultProps = {
    isDisabled: false,
    btnType: 'button',
    styles: '',
    background: 'bg-teal-800',
}
