import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/pages/Footer/Footer";
import LangContext from "./components/LangProvider";

function App() {
  const { currentLangData } = useContext(LangContext);
  return (
    <>
      <Router>
          <Navbar {...currentLangData.navbar}/>
          <Routes>
            <Route path="/" element={<Home {...currentLangData}/>} />
          </Routes>
        <Footer {...currentLangData.footer}/>
      </Router>
    </>
  );
}

export default App;
