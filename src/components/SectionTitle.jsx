import PropTypes from 'prop-types';

export default function SectionTitle({title}) {
    return (
        <h2 className="text-lg bg-black text-white p-1 font-bold text-center w-full">{title.toUpperCase()}</h2>
    );
}

 
SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
};
 