import PropTypes from 'prop-types';
import IconButton from "./buttons/IconButton";
import { useState } from "react";


export default function DeletableItem(props) {
    const [highlight, setHighlight] = useState(false);

    return (
        <div className={`flex-1 flex relative outline-offset-1 outline-2 outline-red-500 ${highlight ? 'outline' : ''} ${props.styles}`}>
            {props.children}
            {props.deleteMode &&
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group/delete" 
                    onMouseOver={() => setHighlight(true)}
                    onMouseOut={() => setHighlight(false)}
                >
                    <IconButton 
                        styles={'bg-red-500 p-1 text-white hover:scale-110'} 
                        size={15} 
                        handler={props.handler} 
                        icon="delete" 
                    />
                </div>
            }
        </div>
    );
}

DeletableItem.propTypes = {
    styles: PropTypes.string,
    deleteMode: PropTypes.bool.isRequired,
    handler: PropTypes.func.isRequired,
    children: PropTypes.array.isRequired,
};

DeletableItem.defaultProps = {
    styles: '',
}