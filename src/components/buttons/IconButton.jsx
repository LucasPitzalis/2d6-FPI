import { X, Edit, Check } from 'lucide-react';
import PropTypes from 'prop-types';

export default function IconButton({ handler, size, icon, hidden }) {
    function getIcon() {
        switch (icon) {
            case "validate": return <Check size={size}/>;
            case "close": return <X size={size}/>;
            case "edit": return <Edit size={size}/>
            default: break;
        }
    }

    return (
        <button onClick={handler} className={hidden ? 'hidden group-hover:block' : ''}>
            {getIcon()}
        </button>
    );
}

IconButton.propTypes = {
    handler: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
    hidden: PropTypes.bool,
    size: PropTypes.number,
};

IconButton.defaultProps = {
    size: 20,
    hidden: false,
}
