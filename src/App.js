import About from './components/About'
import Info from './components/Info';
import Interests from './components/Interests'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
