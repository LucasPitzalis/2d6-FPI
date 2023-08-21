import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { setMobile } from "../actions/app";
import routes from "../config/routes";
import Modal from "./modals/Modal";
import SideBar from "./sidebar/SideBar";

function App() {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.app);
  const characterName = useSelector((state) => state.character.name);
  const location = useLocation();
  const [isSheet, setIsSheet] = useState(true);

  const updateMedia = () => {
    dispatch(setMobile(window.innerWidth < 640))
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    document.title = 'Fiche 2d6' + (characterName !== '' ? ` : ${characterName}` : '');
  }, [characterName]);

  useEffect(() => {
    const currentRoute = routes.find((route) => location.pathname === route.path);
    setIsSheet(currentRoute.sheet);
  }, [location]);

  return (
    <div className="bg-black w-full min-h-screen min-w-screen text-sm flex items-center justify-between flex-col">
      <div className="flex flex-1 w-full min-w-[80%] items-center justify-between">
        <SideBar />
        <div className="flex flex-1 justify-center max-h-screen overflow-auto ">
          <main className={`w-full h-full sm:w-a4 flex flex-col justify-center ${isSheet ? "bg-white p-4" : ""}`}>
            <Routes>
              {routes.map((route) => <Route key={route.name} path={route.path} element={route.element()} />)}
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
            { modal && <Modal /> }
          </main>
        </div>
      </div>
      <ToastContainer
        autoClose={3000}
        transition={Zoom}
        theme={"dark"}
        hideProgressBar
      />
    </div>
  )
}

export default App
