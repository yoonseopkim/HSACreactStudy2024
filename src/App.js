// import Junig from "./Junig"
// import Home from "./Home"
// import Counter from "./Counter"
// import Input from "./Input";
// import Input2 from "./Input2";
// import UserList from "./UserList";
import Junig from "./Junig";
import './App.css';
import React from "react";
import {Routes, Route, Link} from "react-router-dom";

function App() {
    return(
      <div className="App">
        <nav>
          {/* <Link to="/Home">Home</Link>
          <Link to="/Junig">Junig</Link>
          <Link to="/Counter">Counter</Link>
          <Link to="/Input">Input</Link>
          <Link to="/Input2">Input2</Link>
          <Link to="UserList">UserList</Link> */}
          <Link to="/Junig">Junig</Link>
        </nav>
          <Routes>
            {/* <Route path="/Junig" element={<Junig />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Counter" element={<Counter/>}/>
            <Route path="/Input" element={<Input/>}/>
            <Route path="/Input2" element={<Input2/>}/>
            <Route path="/UserList" element={<UserList/>}/> */}
            <Route path="/Junig" element={<Junig/>}/>
          </Routes>
        </div>
    )
}

export default App;
