import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import routes from "../utils/routes";
import Footer from "./Footer";
import Modal from "./Modal";

function App() {
  const { modal } = useSelector((state) => state.app);

  return (
    <div className="bg-black h-full w-full min-h-screen min-w-screen text-sm flex items-center justify-between flex-col">
      <div className="flex flex-1 min-w-[80%] items-center justify-center">
        <main className="w-full lg:w-a4 bg-white p-4">
          <Routes>
            {routes.map((route) => <Route key={route.name} path={route.path} element={route.element()} />)}
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
          { modal && <Modal /> }
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
