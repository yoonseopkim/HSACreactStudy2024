import {useState} from "react";

function Yoonseop() {
    let [like,setLike] = useState(0)
    return (
        <div>
            <div>김윤섭의 페이지</div>
            <div>{like}</div>
            <button onClick={()=>{
                setLike(like+=1)
            }}>좋아요 증가버튼</button>

        </div>
    )
}
export default Yoonseop