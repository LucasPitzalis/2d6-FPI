import PropTypes from 'prop-types';

export default function SheetField(props) {
    return (
        <div className={`border-2 border-black rounded flex items-center ${props.isTitle ? 'text-base' : ''} ${props.styles} ${props.vertical ? 'flex-col' : ''}`}>
            {props.children}
        </div>
    );
}

SheetField.propTypes = {
    isTitle: PropTypes.bool,
    styles: PropTypes.string,
    vertical: PropTypes.bool,
    children: PropTypes.array.isRequired,
};

SheetField.defaultProps = {
    isTitle: false,
    styles: '',
    vertical: false,
}
