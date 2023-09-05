import DropdownChevron from "../ui-elements/DropdownChevron";
import PropTypes from 'prop-types';
import { useState, useRef ,useLayoutEffect} from "react";

export default function DropdownItem({ header, children, defaultOpen}) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    // set contentHeight after first render to make sure contentRef is initialized (not null)
    useLayoutEffect(() => {
        setContentHeight(contentRef.current.scrollHeight);
    }, [contentRef, children]);

    return (
        <>
            <div className="flex justify-between items-center bg-black w-full p-1">
                <div className="flex flex-wrap gap-x-1 grow font-semibold">
                    { header }
                </div>
                <DropdownChevron handler={() => setIsOpen(!isOpen)} isDown={isOpen} />
            </div>
            <div 
                style={{maxHeight: !isOpen ? 0 : contentHeight}}
                ref={contentRef}
                className="flex flex-col dropdown"
            >
                { children }
            </div>
        </>
    );
}

DropdownItem.propTypes = {
    header: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]).isRequired,
    defaultOpen: PropTypes.bool,
};

DropdownItem.defaultProps = {
    defaultOpen: false,
}
