import PropTypes from 'prop-types';

export default function LabelledField(props) {
    return (
        <div className={`border-2 border-black rounded flex ${props.isTitle && "text-base"} ${props.styles} ${props.vertical && "flex-col"}`}>
            {props.children}
        </div>
    );
}

LabelledField.propTypes = {
    isTitle: PropTypes.bool,
    styles: PropTypes.string,
    vertical: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
};


LabelledField.defaultProps = {
    isTitle: false,
    styles: '',
    vertical: false,
}
