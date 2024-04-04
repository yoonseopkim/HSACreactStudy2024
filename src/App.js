import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Yoonseop from "./Pages/Yoonseop";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; //전역 부트스트랩 css 파일 설면
function App() {
    let [post,setPost] = useState('안녕')
    let [like,setLike] = useState(0)

  return (
      <div className="App">


          <BrowserRouter>
          <Routes>
              {/* 공모페이지 */}
              {/* 나의 펀딩 현황 */}
              {/*<Route path="/주소창에쓸 경로" element={< 만든 컴포넌트 이름/>} />*/}
              <Route path="/yoonseop" element={< Yoonseop/>} />

              </Routes>
          </BrowserRouter>
      </div>

  );
}

export default App;
