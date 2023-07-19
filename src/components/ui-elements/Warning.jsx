import PropTypes from 'prop-types';

export default function Warning({ isRed, isFloat }) {
    return (
        <div className={`text-xs font-bold text-white text-center h-4 w-[17px] rounded-full ${isFloat ? 'absolute top-0 -right-1' : 'mx-1'} ${isRed ? 'bg-red-700' : 'bg-amber-600'}`}>
            !
        </div>
    );
}

Warning.propTypes = {
    isRed: PropTypes.bool,
    isFloat: PropTypes.bool,
};

Warning.defaultProps = {
    isRed: false,
    isFloat: false,
}
