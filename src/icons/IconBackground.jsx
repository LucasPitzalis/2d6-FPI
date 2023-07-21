import PropTypes from 'prop-types';

export default function IconBackground(props) {
    return (
        <div className="rounded-full bg-white p-px">
            {props.children}
        </div>
    );
}

IconBackground.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
};