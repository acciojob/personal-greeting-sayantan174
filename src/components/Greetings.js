import React, { useState } from 'react'

const Greetings = ()=>{
    const [name,setName]=useState("");
    const changeName = (event)=>{
        setName(event.target.value);
    }
    return(
        <>
            <p>Enter your name:</p>
            <input type="text" onChange={changeName}/>
            <p style={{display:name.length!=0?"block":"none"}}>Hello {name}!</p>
        </>
    )
}
export default Greetings;