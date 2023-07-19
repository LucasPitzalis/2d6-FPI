import PropTypes from 'prop-types';

export default function SideBarButton({ text, icon, handler }) {
    return (
        <div className="p-2.5 flex space-x-2 items-center justify-start rounded-md duration-300 cursor-pointer hover:bg-blue-600" onClick={handler}>
            { icon }
            <span className="text-left">{ text }</span>
        </div>
    );
}



SideBarButton.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.element,
    handler: PropTypes.func,
};
