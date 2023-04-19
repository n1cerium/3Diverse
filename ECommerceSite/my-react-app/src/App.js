import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Store from './Store';
import About from './About';
import Login from './Login';
import Cart from './Cart';

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Store" element={<Store />} />
              <Route path="/About" element={<About />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Cart" element={<Cart />} />
          </Routes>
      </div>
  );
}

export default App;
