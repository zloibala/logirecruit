import "./App.css";
import NavBar from "./components/navBar/NavBar";
import { Routes, Route } from "react-router-dom";
import BecomeDriver from "./components/pages/BecomeDriver";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/becomeDriver" element={<BecomeDriver />} />
      </Routes>
    </div>
  );
}

export default App;
