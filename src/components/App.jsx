import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Character from "./character/Character";
import Modal from "./Modal";

function App() {
  const { modal } = useSelector((state) => state.app);

  return (
    <div className="bg-black h-screen w-screen flex lg:p-6 text-sm">
      <main className="lg:w-a4 bg-white mx-auto">
        <Routes>
          <Route path="/*" element={<Character />} />
        </Routes>
        { modal && <Modal /> }
      </main>
    </div>
  )
}

export default App
