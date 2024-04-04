import logo from './logo.svg'; 
import './App.css'; // 앱의 CSS 스타일을 불러옵니다.
import { useState } from "react"; 

function App() {
    let [title, setTitle] = useState(0);
    let [글제목, 글제목변경] = useState(['코트', '후드티', '신발']);
    let [좋아요개수, 좋아요변경] = useState([0,0,0]); // 각 글의 좋아요 개수를 저장하는 변수와 좋아요 개수를 변경하는 함수를 선언

    let [modal, setModal] = useState(false); // 모달의 상태를 저장하는 변수와 모달의 상태를 변경하는 함수를 선언
    let [counter, setCounter] = useState(0); // 카운터를 저장하는 변수와 카운터를 변경하는 함수를 선언
    let [입력값, 입력값변경] = useState(''); // 입력값을 저장하는 변수와 입력값을 변경하는 함수를 선언

    return (
        <div className="App">
            <div className="black-nav">
                <div style={{fontSize: '60px', color: 'gray'}}>REACT</div>
            </div>
            <input onChange={(e)=>{
              // 입력값을 변경하는 함수를 호출하여 입력값을 업데이트
              입력값변경(e.target.value)
            }} type="text"/>
            <button onClick={()=>{
                // 입력값을 글 목록에 추가
                let copy = [...글제목];
                copy.unshift(입력값); // 글제목 앞에 입력값(요소)이 추가된다
                글제목변경(copy);
            }}>글발행</button>

            {/* 글 목록 */}
            {글제목.map(function (value, i) {
                return (
                    <div className="list" key={i}>

                        <h4 onClick={() => {
                            // 모달을 열고 선택된 글의 인덱스를 업데이트
                            { setModal(true); setTitle(i); } // () 안 true 는 모달 상태를 활성화 시킴
                            // 카운터를 증가시키고 모달을 염
                            setCounter(counter + 1);
                            setModal(true);
                        }}>
                            {value}
                            <button onClick={()=>{
                                let copy = [...글제목];
                                copy.splice(i,1); // i번째 인덱스부터 1개의 요소를 제거한다.
                                글제목변경(copy);
                            }}>delete</button>
                            <button onClick={() => {
                                let copy = [...글제목];
                                copy.sort(); // 요소를 적절한 위치에 따라 정렬하는 매서드. 숫자에 sort()를 쓰면 작은 숫자부터 큰 숫자 순서대로 정렬된다.
                                글제목변경(copy);
                            }}>가나다순정렬
                            </button>
                            <span  onClick={() => {
                                // 선택된 글의 좋아요 개수를 증가시킴
                                let copy = [...좋아요개수];
                                copy[i] = copy[i] + 1; //copy 배열의 인덱스 i에 해당하는 요소를 1씩 증가시킨다.
                                좋아요변경(copy)
                            }}>👍</span> {좋아요개수[i]} </h4>
                        <p>2월 17일 발행</p>
                    </div>
                )
            })}
        </div>
    )
}

// 모달 컴포넌트
function Modal(props) {
    return (
        <div className="modal">
            {/* 선택된 글의 제목을 표시합니다. */}
            <h4>{props.글제목[props.title]}</h4>
            {/* 수정 버튼 */}
            <button>변경</button>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;