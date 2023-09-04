import { ChevronUp } from "lucide-react";
import PropTypes from 'prop-types';

export default function DropdownChevron({ isDown, handler }) {
    return (
        <button className={`duration-300 text-white ${!isDown ? 'rotate-180' : ''}`} onClick={handler}>
            <ChevronUp />
        </button> 
    );
}

DropdownChevron.propTypes = {
    isDown: PropTypes.bool.isRequired,
    handler: PropTypes.func,
};
