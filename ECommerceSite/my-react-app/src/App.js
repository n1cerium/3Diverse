import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Store from './Store';
import ThreeEx from './ThreeEx';
import Login from './Login';
import Cart from './Cart';
import SignUp from './Signup';

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Store" element={<Store />} />
              <Route path="/ThreeEx" element={<ThreeEx />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<SignUp />} />
              <Route path="/Cart" element={<Cart />} />
          </Routes>
      </div>
  );
}

export default App;
