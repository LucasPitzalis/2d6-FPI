import { ChevronUp } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function SubMenu(props) {
    const [isCollapsed, setCollapsed] = useState(false);

    return (
        <div className="ml-4">
            <div
                className="p-2.5 flex items-center rounded-md duration-300 cursor-pointer hover:bg-blue-600 text-white"
                onClick={() => setCollapsed(!isCollapsed)}
            >
                <div className="flex justify-between w-full items-center">
                    <h3 className="text-lg">{props.title}</h3>
                    <span className={`duration-300 ${!isCollapsed ? 'rotate-180' : ''}`}>
                        <ChevronUp />
                    </span> 
                </div>
            </div>
            <div
                className={`ml-4 ${!isCollapsed ? 'hidden' : ''}`}
            >
                {props.children}
            </div>
        </div>
    );
}

SubMenu.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
};
