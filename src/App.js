// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from './components/About';
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#093963";
      showAlert("Dark mode is enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled!", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TEXTUTILS" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container">
           <Routes>
           Updated Route syntax for React Router v6 
             <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element={<TextForm heading="YOUR DETAILS:" showAlert={showAlert} mode={mode} />} />
          </Routes> 
        </div>
      </Router>
    </>
  );
}

export default App;
