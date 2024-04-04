import { useState } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Junig =() =>{
    let[글제목, 글제목변경]=useState(['여자 코트 추천', '봄옷 신상', '리액트 꿈나무']);
    let[좋아요, 좋아요변경]=useState(0);

    let[입력값, 입력값변경]=useState('');
    
    const writeHandler=()=>{
        const 글추가=[...글제목];
        글추가.unshift(입력값);
        글제목변경(글추가);

    }
    return(
        <div>
            <input type='text' onChange={(e) => {
        입력값변경(e.target.value)
      }} />
            <button onClick={writeHandler}>작성</button>

            <div class="list">
                {글제목.map((글제목, index)=>{
                    return(
                        <div key={index}>
                            <h4>{글제목}<span onClick={()=>{좋아요변경(좋아요+1)}}> 좋아요 </span>{좋아요}</h4>
                            <p>4월 14일</p> 
                            <button onClick={()=>{let a=[...글제목]; a.sort(); 글제목변경(a)}}>정렬</button>
                            <button onClick={()=>{
                                let 글삭제 =[...글제목];
                                글삭제.splice(index,1);
                                글제목변경(글삭제)
                            }}>삭제</button>
                        </div>
                    );
                })}
            </div>
        </div>
    )

}

export default Junig;