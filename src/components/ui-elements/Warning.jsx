import PropTypes from 'prop-types';

export default function Warning({ isRed }) {
    return (
        <span className={`font-bold text-white h-4 w-4 text-center rounded-full absolute top-0 right-0 text-xs ${isRed ? 'bg-red-700' : 'bg-amber-600'}`}>
            !
        </span>
    );
}

Warning.propTypes = {
    isRed: PropTypes.bool,
};

Warning.defaultProps = {
    isRed: false,
}
