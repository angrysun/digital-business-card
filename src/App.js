import About from './components/About'
import Info from './components/Info';
import Interests from './components/Interests'
import Footer from './components/Footer'
import ToggleButton from './components/ToggleButton';
import { useState, useEffect } from 'react';

let Checked = () => <>🌙</>;
let Unchecked = () => <>🔆</>;

function App() {
  const storedDarkMode = JSON.parse(localStorage.getItem("dbc-dark-mode"));
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDark) {
      setDarkMode(true);
      Checked = () => <>🔆</>;
      Unchecked = () => <>🌙</>;
    } else {
      setDarkMode(false);
    }
  }, []);

  // useEffect(() => {
  //   console.log(`Is in dark mode? ${darkMode}`);
  //   localStorage.setItem("dbc-dark-mode", darkMode);
  // }, [darkMode]);

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <Info />
      <ToggleButton
        onChange={toggleDarkMode}
        icons={{ checked: <Checked />, unchecked: <Unchecked /> }}
        aria-label="Dark mode"
      />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
