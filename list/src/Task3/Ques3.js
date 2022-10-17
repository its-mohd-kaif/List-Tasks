import React, { useState, useEffect } from "react";
import "./style3.css";
function Ques3() {
 
  // Usestate for holding list value
  const [group1, setGroup1] = useState();
  const [group2, setGroup2] = useState();
  // UseEffect for rendering one time list when page is loaded
  useEffect(() => {
    const li1 = ["Ajax", "jQuery", "javaScirpt", "MooTools", "Prototype", "Dojo"];
    const li2 = ["ASP.NET", "C#", "VB.NET", "Java", "PHP", "Python"];
    setGroup1(li1);
    setGroup2(li2);
  }, []);
  // Transfer data from list1 to list2
  const leftToright = () => {
    // console.log("LI1",li1)
    // console.log("LI2",li2)
    let selected = document.querySelectorAll("#group1 option:checked");
    let values = Array.from(selected).map((el) => el.value);

    console.log("First",values)

    values.forEach((element) => {
      li1.forEach((element2, index) => {
        if (element === element2) {
          li1.splice(index, 1);
        }
      });
      li2.push(element);
    });
  
    console.log("LI1",li1)
    console.log("LI2",li2)
    setGroup1(li1);
    setGroup2(li2);
   
  };
  // Transfer data from list2 to list1
  const rightToleft = () => {
    let selected = document.querySelectorAll("#group2 option:checked");
    let values = Array.from(selected).map((el) => el.value);
    console.log("Second",values)


    values.forEach((element) => {
      li2.forEach((element2, index) => {
        if (element === element2) {
          li2.splice(index, 1);
        }
      });
      li1.push(element);
    });
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
            <select name="group1" id="group1" className="group" multiple>
              {group1.map((list) => (
                <option value={list}>{list}</option>
              ))}
            </select>
          </div>
          <div className="column2">
            <br></br>
            <br></br>
            <button onClick={leftToright}>➡</button>
            <br></br>
            <br></br>
            <button onClick={rightToleft}>⬅</button>
          </div>
          <div className="column3">
            <select name="group2" id="group2" className="group" multiple>
              {group2.map((list) => (
                <option value={list}>{list}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Ques3;
