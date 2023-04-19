import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Store from './Store';
import About from './About';

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Store" element={<Store />} />
              <Route path="/About" element={<About />} />
          </Routes>
      </div>
  );
}

export default App;
