import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import routes from "../config/routes";
import Modal from "./modals/Modal";
import SideBar from "./sidebar/SideBar";

function App() {
  const { modal } = useSelector((state) => state.app);
  const characterName = useSelector((state) => state.character.name);

  useEffect(() => {
    document.title = 'Fiche 2d6' + (characterName !== '' ? ` : ${characterName}` : '');
  }, [characterName]);

  return (
    <div className="bg-black w-full min-h-screen min-w-screen text-sm flex items-center justify-between flex-col">
      <div className="flex flex-1 w-full min-w-[80%] items-center justify-between">
        <SideBar />
        <div className="flex flex-1 justify-center max-h-screen overflow-auto ">
          <main className="w-full h-full md:w-a4 bg-white p-4 flex flex-col justify-center">
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
