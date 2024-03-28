/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  let [나, 변경] = useState(['나이', '취미', '알바']);
  let [따봉, 따봉변경] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{post}</h4>
      </div>
      <button onClick={()=>{글제목변경(['23', '여행', '카페 알바']);}}>?</button>


      <div className="list">
        <h4>{ 나[0] } <span onClick={ () => { 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 나[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 나[2] }</h4>
        <p>2월 18일 발행</p>
      </div>

      <Sang></Sang>
    </div>
  );
}

function Sang() {
  return (
    <div className='Sang'>
    <h4>윤상혁입니다</h4>
    <p>23살 입니다.</p>
    <p>23학번이고, 여행 다니는 것을 좋아합니다. 카페 알바를 하고 있습니다.</p>
  </div>
  )
}

export default App;
