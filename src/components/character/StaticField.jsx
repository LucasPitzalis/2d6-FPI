import PropTypes from 'prop-types';

export default function StaticField({ value }) {
    return (
        <p className="p-1">{ value }</p>
    );
}

StaticField.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};