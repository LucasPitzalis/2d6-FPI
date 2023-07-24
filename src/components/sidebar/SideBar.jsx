import { Download, Upload, UserPlus, Menu } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { handleModal } from "../../actions/app";
import { exportSheet } from "../../actions/save";
import routes from "../../config/routes";
import IconButton from "../buttons/IconButton";
import SideBarButton from "./SideBarButton";
import SubMenu from "./SubMenu";

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    return (
        <>
            {!isOpen && 
                <button 
                    className="z-10 lg:hidden fixed top-5 left-5 p-1 bg-gray-700 text-white rounded-md duration-300 hover:bg-blue-600"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu />
                </button>
            }
            <div className={`z-10 fixed top-0 bottom-0 lg:static lg:h-screen p-2 w-[250px] overflow-y-auto text-center bg-gray-900 text-white font-bold duration-300
                ${!isOpen ? '-translate-x-[250px] lg:translate-x-0' : ''}`}>
                <div className="text-xl">
                    <div className="p-2.5 mt-1 flex items-center relative ">
                        <h2 className="text-lg ml-3">Menu</h2>
                        <div className="lg:hidden absolute right-0 leading-none top-2.5 rounded-md duration-300 cursor-pointer hover:bg-blue-600"><IconButton size={24} icon={"close"} handler={() => setIsOpen(false)} /></div>
                    </div>
                    <div className="my-2 bg-gray-600 h-[1px]"></div>
                </div>
                <SubMenu title="Fiche" defaultCollapsed>
                    {routes.map((route) => 
                        <NavLink
                            key={route.name}
                            to={route.path}
                            className={({ isActive }) => (isActive ? 'italic' : '')}
                        >
                            <span className="p-2.5 flex items-center justify-start text-left rounded-md duration-300 cursor-pointer hover:bg-blue-600">{route.nameFr}</span>
                        </NavLink>
                    )}
                </SubMenu>
                <SubMenu title={"Outils"} defaultCollapsed>
                    <SideBarButton icon={<Upload />} text="Exporter" handler={() => dispatch(exportSheet())} />
                    <SideBarButton icon={<Download />} text="Importer" handler={() => dispatch(handleModal("importSheet"))} />
                    <SideBarButton icon={<UserPlus />} text="Nouveau personnage" handler={() => dispatch(handleModal("newSheet"))} />
                </SubMenu>
            </div>
        </>
    );
}
