import React, { useState, useEffect } from "react";
import "./style3.css";
function Ques3() {
  const li1 = ["Ajax", "jQuery", "javaScirpt", "MooTools", "Prototype", "Dojo"];
  const li2 = ["ASP.NET", "C#", "VB.NET", "Java", "PHP", "Python"];
  // Usestate for holding list value
  const [group1, setGroup1] = useState([]);
  const [group2, setGroup2] = useState([]);
  // UseEffect for rendering one time list when page is loaded
  useEffect(() => {
    setGroup1(li1);
    setGroup2(li2);
  }, []);
  // Transfer data from list1 to list2
  const leftToright = () => {
    setGroup1(li2);
    setGroup2(li1);
  };
  // Transfer data from list2 to list1
  const rightToleft = () => {
    setGroup1(li1);
    setGroup2(li2);
  };

  return (
    <div>
      <h1>Ques 3</h1>
      <h3>Move items between two groups as shown in attachment.</h3>
      <div className="container">
        <div className="row">
          <div className="column1">
            <ul>
              {group1.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </div>
          <div className="column2">
            <br></br>
            <br></br>
            <br></br>
            <button onClick={leftToright}>➡</button>
            <br></br>
            <br></br>
            <button onClick={rightToleft}>⬅</button>
          </div>
          <div className="column3">
            <ul>
              {group2.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Ques3;
