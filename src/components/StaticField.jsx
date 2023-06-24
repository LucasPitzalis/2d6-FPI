import PropTypes from 'prop-types';

export default function StaticField() {
    return (
        
    );
}

StaticField.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};