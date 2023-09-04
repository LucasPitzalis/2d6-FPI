import { Download, Upload, UserPlus, Menu } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleModal, setExportBlobUrl } from "../../actions/app";
import { exportSheet } from "../../actions/save";
import routes from "../../config/routes";
import { generateSheetFileName } from "../../utils/functions";
import IconButton from "../buttons/IconButton";
import SideBarButton from "./SideBarButton";
import SideBarLink from "./SideBarLink";
import SubMenu from "./SubMenu";

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const { exportBlobUrl } = useSelector((state) => state.app);
    const characterName = useSelector((state) => state.character.name);
    const exportLinkRef = useRef(null);

    useEffect(() => {
        if(exportBlobUrl !== null && exportLinkRef.current) {
            exportLinkRef.current.click();
            dispatch(setExportBlobUrl(null));
        }
    }, [exportBlobUrl]);

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
                <SubMenu title="Fiche" defaultOpen>
                    {routes.filter((route) => route.sheet).map((route) => 
                        <SideBarLink onClickHandler={() => setIsOpen(false)} title={route.nameFr} route={route.path} key={route.name}/>
                    )}
                </SubMenu>
                <SubMenu title={"Outils"} defaultOpen>
                    <SideBarButton icon={<Upload />} text="Exporter" handler={() => dispatch(exportSheet())} />
                    <a className="hidden" href={exportBlobUrl} download={generateSheetFileName(characterName)} ref={exportLinkRef}/>
                    <SideBarButton icon={<Download />} text="Importer" handler={() => dispatch(handleModal("importSheet"))} />
                    <SideBarButton icon={<UserPlus />} text="Nouveau personnage" handler={() => dispatch(handleModal("newSheet"))} />
                </SubMenu>
                <h3 className="ml-4 text-lg">
                    <SideBarLink onClickHandler={() => setIsOpen(false)} title="À propos" route="/a-propos" />
                </h3>   
            </div>
        </>
    );
}
