import PropTypes from 'prop-types';

export default function PetOption({ name, index, isDisabled }) {
    return (
        <option value={index} disabled={isDisabled}>
            {name.trim() === '' ? `Familier n°${index + 1}` : `n°${index + 1} : ${name.trim()}`}
        </option>
    );
}

PetOption.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool,
};

PetOption.defaultProps = {
    isDisabled: false,
};