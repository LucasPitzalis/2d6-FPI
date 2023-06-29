import { MinusCircle } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';


export default function MinusButton({ handler, size }) {
    const [hover, setHover] = useState(false);

    return (
        <button className="hover:bg-black rounded-full p-0.5" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={handler}>
            <MinusCircle size={size*4} color={hover ? 'white' : 'black'} />
        </button>
    );
}

MinusButton.propTypes = {
    handler: PropTypes.func.isRequired,
    size: PropTypes.number,
};

MinusButton.defaultProps = {
    size: 5,
}
