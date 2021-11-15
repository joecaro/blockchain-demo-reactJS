import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Block from "./Pages/Block";
import Blockchain from "./Pages/Blockchain";
import DistributedChain from "./Pages/DistributedChain";
import Hash from "./Pages/Hash";
import Home from "./Pages/Home";

const activeStyle = {
  fontWeight: "bold",
};

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink exact to='/' activeStyle={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/hash' activeStyle={activeStyle}>
              Hash
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/block' activeStyle={activeStyle}>
              Block
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/blockchain' activeStyle={activeStyle}>
              Blockchain
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/distributed' activeStyle={activeStyle}>
              Distributed Blockchain
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/hash' element={<Hash />}></Route>
        <Route exact path='/block' element={<Block />}></Route>
        <Route path='/blockchain' element={<Blockchain />}></Route>
        <Route path='/distributed' element={<DistributedChain />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
