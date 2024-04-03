import React, {useState} from "react";

const Input =() =>{
    const [textValue, setTextValue]=useState("");

    const oc=(e)=>{
        setTextValue(e.target.value);
    };

    return(
        <div>
            <input type="text" value={textValue}
            onChange={oc}
            />
            <br/>
            <p>{textValue}</p>
        </div>
    )

}

export default Input;