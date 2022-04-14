import About from './components/About'
import Info from './components/Info';
import Interests from './components/Interests'
import Footer from './components/Footer'
import { useState, useEffect } from 'react';

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
