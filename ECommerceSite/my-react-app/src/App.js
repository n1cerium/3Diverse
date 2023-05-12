import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

//import the pages
import Home from './Home';
import Store from './Store';
import ThreeEx from './ThreeEx';
import Login from './Login';
import Cart from './Cart';
import SignUp from './Signup';
import Thankyou from './Thankyou';

//creats navigation betwwen pages with routes
function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Store />} />
              <Route path="/Welcome" element={<Home />} />
              <Route path="/ThreeEx" element={<ThreeEx />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<SignUp />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Thankyou" element={<Thankyou />} />
          </Routes>
      </div>
  );
}

export default App;
