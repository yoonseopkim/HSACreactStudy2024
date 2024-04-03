import React, {useState} from "react";

const Input2 =() =>{
    const [textValue, setTextValue]=useState("");

    const oc=(e)=>{
        setTextValue(e.target.value);
    };

    const [inputs, setInputs]=useState({
        name: "a",
        email: "a",
        tel: "a"
    })

    const {name, email, tel}=inputs;

    const onChange=(e) => {
        const value= e.target.value;
        const id=e.target.id;
        setInputs({
            ...inputs,
            [id]:value
        });
    }

    return(
        //value={name}
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={tel} onChange={onChange}/>
            </div>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>전화번호: {tel}</p>

            <input type="text" value={textValue}
            onChange={oc}
            />
            <br/>
            <p>{textValue}</p>
        </div>
    )

}

export default Input2;
