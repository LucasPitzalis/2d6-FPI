import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Character from "./character/Character";
import Modal from "./Modal";

function App() {
  const { modal } = useSelector((state) => state.app);

  return (
    <div className="bg-black h-full w-full min-h-screen min-w-screen text-sm flex items-center justify-between flex-col">
      <div className="flex flex-1 items-center">
        <main className="lg:w-a4 bg-white p-4">
          <Routes>
            <Route path="/*" element={<Character />} />
          </Routes>
          { modal && <Modal /> }
        </main>
      </div>
      <footer className="h-20 w-full bg-white mt-4">PH footer</footer>
    </div>
  )
}

export default App
