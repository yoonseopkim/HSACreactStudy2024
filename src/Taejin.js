import {useState} from "react";

function Taejin() {
    let [title, titlechange] = useState(['한성대 맛집', '홍대 맛집', '강남 맛집'])
    return (
    <div className="App">
    <div className="black-nav">
        <h3>맛있는 음식들123</h3>
    </div>


    <div className="list">
        <h4>{ title[0] }</h4>
    </div>
    <div className="list">
        <h4>{ title[1] }</h4>
    </div>
    <div className="list">
        <h4>{ title[2] }</h4>
    </div>

    <Modal></Modal>
    
    </div>
    );
}

function Modal() {
    return (
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
    );
}

export default Taejin
    