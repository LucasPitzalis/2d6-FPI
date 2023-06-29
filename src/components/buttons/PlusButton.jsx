import { PlusCircle } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';


export default function PlusButton({ handler, size }) {
    const [hover, setHover] = useState(false);

    return (
        <button className="hover:bg-black rounded-full p-0.5" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={handler}>
            <PlusCircle size={size} color={hover ? 'white' : 'black'} />
        </button>
    );
}

PlusButton.propTypes = {
    handler: PropTypes.func.isRequired,
    size: PropTypes.number,
};

PlusButton.defaultProps = {
    size: 20,
}
