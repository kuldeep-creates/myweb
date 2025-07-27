import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode1 = () => {
    setMode("light");
    showAlert("Light Mode Enabled", "success");
  };
  const toggleMode2 = () => {
    setMode("dark");
    showAlert("Dark Mode Enabled", "success");
  };
  const toggleMode3 = () => {
    setMode("success");
    showAlert("Success Mode Enabled", "success");
  };
  const toggleMode4 = () => {
    setMode("danger");
    showAlert("Danger Mode Enabled", "success");
  };
  const toggleMode5 = () => {
    setMode("warning");
    showAlert("Warning Mode Enabled", "success");
  };

  useEffect(() => {
    const themeStyles = {
      light: { backgroundColor: "white", color: "black" },
      dark: { backgroundColor: "#34383b", color: "white" },
      success: { backgroundColor: "#d1e7dd", color: "#0f5132" },
      danger: { backgroundColor: "#f8d7da", color: "#842029" },
      warning: { backgroundColor: "#fff3cd", color: "#664d03" },
    };

    const applied = themeStyles[mode] || themeStyles.light;
    document.body.style.backgroundColor = applied.backgroundColor;
    document.body.style.color = applied.color;
  }, [mode]);

  return (
    <Router basename="/myweb">
      <Navbar
        title="MYapp"
        aboutext="About us"
        darkMode={mode}
        toggleMode1={toggleMode1}
        toggleMode2={toggleMode2}
        toggleMode3={toggleMode3}
        toggleMode4={toggleMode4}
        toggleMode5={toggleMode5}
      />
      <Alert alart={alert} />
      <div className="container">
        <TextForm
                heading="CONVERTOR"
                darkMode={mode}
                showAlert={showAlert}
              />

      </div>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="CONVERTOR"
                darkMode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
