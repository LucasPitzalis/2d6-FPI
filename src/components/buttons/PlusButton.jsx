import PropTypes from 'prop-types';

export default function PlusButton({ handler }) {
    return (
        <button onClick={handler} className="font-bold rounded-full border border-black w-5 h-5 leading-none hover:bg-black hover:text-white">+</button>
    );
}

PlusButton.propTypes = {
    handler: PropTypes.func.isRequired,
};
