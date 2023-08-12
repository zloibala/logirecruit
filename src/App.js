import "./App.css";
import NavBar from "./components/navBar/NavBar";
import { Routes, Route } from "react-router-dom";
import BecomeDriver from "./components/pages/BecomeDriver";
import Home from "./components/pages/home";
import AboutUs from "./components/pages/AboutUs";
import FindDriver from "./components/pages/FindDriver";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/becomeDriver" element={<BecomeDriver />} />
        <Route path="home" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/findDriver" element={<FindDriver />} />
      </Routes>
    </div>
  );
}

export default App;
