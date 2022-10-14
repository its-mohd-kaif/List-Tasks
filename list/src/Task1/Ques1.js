import React from 'react'

function Ques1() {
    const fruits=["Mango","Apple","Banana","Orange","Dragon fruit"];
  return (
    <div>
        <h1>Ques 1</h1>
        <h3>Create a list of fruits and print it using map.</h3>
        <ul>
        {fruits.map((list)=><li key={list}>{list}</li>)}
        </ul>
        <hr></hr>
    </div>
  )
}

export default Ques1