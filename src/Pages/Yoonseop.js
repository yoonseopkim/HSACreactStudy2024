import {useState} from "react";
import {Button, Card, InputGroup, Nav, Form} from "react-bootstrap";
import NavbarYs from "../Components/NavbarYs";
/**이름 입 **/
function Yoonseop() {
    let [like,setLike] = useState(0)
    let [post,setPost] = useState(['게시물1','게시물2','게시물3','게시물4'])
    let [newPost,setNewPost] = useState('')




    return (
        // 전체를 담는 div 박스
        <div>
            <div> <NavbarYs></NavbarYs></div>
            {/*게시글 작성*/}
            <div>   <input style={{borderColor :"greenyellow"}} onChange={(e)=>{
                setNewPost(e.target.value)
            }
            }></input>
                <Button variant="success" onClick={()=>{
                    let copy = [...post]
                    copy.unshift(newPost)
                    setPost(copy)
                }}>게시물 등록</Button>
            </div>


            <div>
                {post.map((value,index)=>(
                    <Card className="text-center" key={index}>

                        <Card.Body>
                            <Card.Title>{value}</Card.Title>
                            <Button variant="danger" onClick={()=>{
                                let copy = [...post]
                                copy.splice(index, 1)
                                setPost(copy)
                            }}>게시물 삭제</Button>
                        </Card.Body>

                    </Card>
                ))}


            </div>



            <div>김윤섭의 페이지0329 변 </div>
            <div>{like}</div>
            <button onClick={()=>{
                setLike(like+=1)
            }}>좋아요 증가버튼</button>

        </div>
    )
}
export default Yoonseop