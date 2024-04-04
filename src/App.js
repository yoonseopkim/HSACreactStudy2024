import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Taejin from "./Taejin"
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {

  let [title, titlechange] = useState(['한성대 맛집', '홍대 맛집', '강남 맛집']);

  return (
    <div className="App">


          <BrowserRouter>
          <Routes>
              {/* 공모페이지 */}
              {/* 나의 펀딩 현황 */}
              <Route path="/taejin" element={< Taejin/>} />
              </Routes>
          </BrowserRouter>
      </div>

  );
}

export default App;