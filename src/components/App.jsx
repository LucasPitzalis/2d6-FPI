import { Route, Routes } from "react-router-dom";
import Character from "./Character";

function App() {

  return (
    <div className="bg-black h-screen w-screen flex lg:p-6 text-sm">
      <main className="lg:w-a4 bg-white mx-auto">
        <Routes>
          <Route path="/*" element={<Character />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
