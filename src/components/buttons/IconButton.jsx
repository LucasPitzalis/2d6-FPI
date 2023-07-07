import { Trash2 } from 'lucide-react';
import { X, Edit, Check } from 'lucide-react';
import PropTypes from 'prop-types';

export default function IconButton({ handler, size, icon, background}) {
    function getIcon() {
        const props = {size: size};
        switch (icon) {
            case 'validate': return <Check {...props}/>;
            case 'close': return <X {...props}/>;
            case 'edit': return <Edit {...props}/>
            case 'delete': return <Trash2 {...props}/>
            default: break;
        }
    }

    return (
        <button onClick={handler} className={`rounded-full p-0.5 ${background !== '' && `bg-${background}`}`}>
            {getIcon()}
        </button>
    );
}

IconButton.propTypes = {
    handler: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
    background: PropTypes.string,
    size: PropTypes.number,
};

IconButton.defaultProps = {
    background: '',
    size: 20,
}
