import PropTypes from 'prop-types';
import { useLayoutEffect, useState, useRef } from 'react';
import DropdownChevron from '../ui-elements/DropdownChevron';

export default function SubMenu({title, icon, children, defaultOpen}) {
    const [isOpen, setOpen] = useState(defaultOpen);

    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    // set contentHeight after first render to make sure contentRef is initialized (not null)
    useLayoutEffect(() => {
        setContentHeight(contentRef.current.scrollHeight);
    }, [contentRef]);

    return (
        <div className="ml-4">
            <div
                className="p-2.5 flex items-center rounded-md duration-300 cursor-pointer hover:bg-blue-600 text-white"
                onClick={() => setOpen(!isOpen)}
            >
                <div className="flex justify-between w-full items-center">
                    <h3 className="text-lg">{title}<span>{icon}</span></h3>
                    <DropdownChevron isDown={isOpen} />
                </div>
            </div>
            <div
                className={`ml-4 dropdown ${isOpen ? '' : 'overflow-hidden'}`}
                style={{maxHeight: !isOpen ? 0 : contentHeight}}
                ref={contentRef}
            >
                {children}
            </div>
        </div>
    );
}

SubMenu.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
    icon: PropTypes.element,
    defaultOpen: PropTypes.bool,
};

SubMenu.defaultProps = {
    defaultOpen: false,
}
