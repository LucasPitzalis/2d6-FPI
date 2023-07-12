export default function CircleDot({ size, checked }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-dot">
            <circle cx="12" cy="12" r="10"/>
            {checked && <circle cx="12" cy="12" r="5" fill="black" />}
        </svg>
    );
}

import PropTypes from 'prop-types';

CircleDot.propTypes = {
    size: PropTypes.number,
    checked: PropTypes.bool,
};

CircleDot.defaultProps = {
    size: 15,
    checked: false,
}