import About from './components/About'
import Info from './components/Info';
import Interests from './components/Interests'
import Footer from './components/Footer'
import { useState, useEffect } from 'react';
import Toggle from "react-toggle";

function App() {
  const storedDarkMode = localStorage.getItem("dbc-dark-mode");
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    console.log(`Is in dark mode? ${darkMode}`);
    localStorage.setItem("dbc-dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <Info />
      <Toggle
        className="dark-mode-toggle"
        checked={darkMode}
        onChange={toggleDarkMode}
        icons={{ checked: "🌙", unchecked: "🔆" }}
        aria-label="Dark mode toggle"
      />
      <button onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
