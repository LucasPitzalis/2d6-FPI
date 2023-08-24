import { ChevronUp } from 'lucide-react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState, useRef } from 'react';

export default function SubMenu(props) {
    const [isCollapsed, setCollapsed] = useState(props.defaultCollapsed);

    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    // set contentHeight after first render to make sure contentRef is initialized (not null)
    useEffect(() => {
        setContentHeight(contentRef.current.scrollHeight);
    }, [contentRef]);

    return (
        <div className="ml-4">
            <div
                className="p-2.5 flex items-center rounded-md duration-300 cursor-pointer hover:bg-blue-600 text-white"
                onClick={() => setCollapsed(!isCollapsed)}
            >
                <div className="flex justify-between w-full items-center">
                    <h3 className="text-lg">{props.title}<span>{props.icon}</span></h3>
                    <span className={`duration-300 ${!isCollapsed ? 'rotate-180' : ''}`}>
                        <ChevronUp />
                    </span> 
                </div>
            </div>
            <div
                className={`ml-4 ${!isCollapsed ? 'max-h-0' : `max-h-[${contentHeight}px]`} transition-all duration-400 ease-in-out overflow-hidden`}
                ref={contentRef}
            >
                {props.children}
            </div>
        </div>
    );
}

SubMenu.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
    icon: PropTypes.element,
    defaultCollapsed: PropTypes.bool,
};

SubMenu.defaultProps = {
    defaultCollapsed: false,
}
