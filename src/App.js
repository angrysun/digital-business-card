import About from './components/About'
import Info from './components/Info';
import Interests from './components/Interests'
import Footer from './components/Footer'
import ToggleButton from './components/ToggleButton';
import { useState, useEffect } from 'react';

const Checked = () => <>🌙</>;
const UnChecked = () => <>🔆</>;

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
      <ToggleButton />
      <p>Toggle Button - Icons Change</p>
      <ToggleButton onChange={state => console.log(state)} icons={{ checked: <Checked />, unchecked: <UnChecked /> }} />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
