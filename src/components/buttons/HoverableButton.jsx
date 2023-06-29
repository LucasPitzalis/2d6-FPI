import { MinusCircle, PlusCircle } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';


export default function HoverableButton({ handler, size, icon }) {
    const [hover, setHover] = useState(false);

    function getIcon() {
        switch (icon) {
            case "+": return <PlusCircle size={size} color={hover ? 'white' : 'black'} />;
            case "-": return <MinusCircle size={size} color={hover ? 'white' : 'black'} />;
            default: break;
        }
    }

    return (
        <button type="button" className="hover:bg-black rounded-full p-0.5" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={handler}>
            {getIcon()}
        </button>
    );
}

HoverableButton.propTypes = {
    handler: PropTypes.func.isRequired,
    size: PropTypes.number,
    icon: PropTypes.string.isRequired,
};

HoverableButton.defaultProps = {
    size: 20,
}
