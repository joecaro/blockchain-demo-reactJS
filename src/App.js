import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Block from "./Pages/Block";
import Blockchain from "./Pages/Blockchain";
import DistributedChain from "./Pages/DistributedChain";
import Hash from "./Pages/Hash";
import Home from "./Pages/Home";

const activeStyle = {
  color: "#2955f3",
  filter: "drop-shadow(0 0 2px #0a3cef22)",
};

function App() {
  return (
    <Router>
      <Header />
      <Nav>
        <ul>
          <li>
            <NavLink
              exact='true'
              to='/'
              style={({ isActive }) => (isActive ? activeStyle : {})}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact='true'
              to='/hash'
              style={({ isActive }) => (isActive ? activeStyle : {})}>
              Hash
            </NavLink>
          </li>
          <li>
            <NavLink
              exact='true'
              to='/block'
              style={({ isActive }) => (isActive ? activeStyle : {})}>
              Block
            </NavLink>
          </li>
          <li>
            <NavLink
              exact='true'
              to='/blockchain'
              style={({ isActive }) => (isActive ? activeStyle : {})}>
              Blockchain
            </NavLink>
          </li>
          <li>
            <NavLink
              exact='true'
              to='/distributed'
              style={({ isActive }) => (isActive ? activeStyle : {})}>
              Distributed Blockchain
            </NavLink>
          </li>
        </ul>
      </Nav>

      <Main>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/hash' element={<Hash />}></Route>
          <Route exact path='/block' element={<Block />}></Route>
          <Route path='/blockchain' element={<Blockchain />}></Route>
          <Route path='/distributed' element={<DistributedChain />}></Route>
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
