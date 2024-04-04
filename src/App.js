// import Junig from "./Junig"
// import Home from "./Home"
// import Counter from "./Counter"
// import Input from "./Input";
// import Input2 from "./Input2";
// import UserList from "./UserList";
import Junig from "./Junig";
import './App.css';

import {useState} from "react";
import React from "react";
import Yoonseop from "./Pages/Yoonseop";
import {Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; //전역 부트스트랩 css 파일 설면
function App() {
    let [post,setPost] = useState('안녕')
    let [like,setLike] = useState(0)

  return (
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
              {/* 공모페이지 */}
              {/* 나의 펀딩 현황 */}
              {/*<Route path="/주소창에쓸 경로" element={< 만든 컴포넌트 이름/>} />*/}
              <Route path="/yoonseop" element={< Yoonseop/>} />
    {/* <Route path="/Junig" element={<Junig />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Counter" element={<Counter/>}/>
            <Route path="/Input" element={<Input/>}/>
            <Route path="/Input2" element={<Input2/>}/>
            <Route path="/UserList" element={<UserList/>}/> */}
            <Route path="/Junig" element={<Junig/>}/>
              </Routes>
       
      </div>

  );

}

export default App;
