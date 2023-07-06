import { NavLink } from "react-router-dom";
import routes from "../utils/routes";

export default function Footer() {
    return (
        <footer className="h-20 w-full bg-white mt-4">
            <nav className="flex justify-center space-x-5">
                {routes.map((route) => 
                    <NavLink
                        key={route.name}
                        to={route.path}
                        className={({ isActive }) => (isActive ? 'font-bold' : '')}
                    >
                        {route.nameFr}
                    </NavLink>
                )}
            </nav>
        </footer>
    );
}
