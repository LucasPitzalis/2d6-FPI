import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function SideBarLink({route, title, onClickHandler, icon}) {
    return (
        <NavLink
            onClick={onClickHandler}
            to={route}
            className={({ isActive }) => (isActive ? 'italic' : '')}
        >
            { icon }
            <span className="p-2.5 flex items-center justify-start text-left rounded-md duration-300 cursor-pointer hover:bg-blue-600">{title}</span>
        </NavLink>
    );
}


SideBarLink.propTypes = {
    route: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func,
    icon: PropTypes.element,
};
