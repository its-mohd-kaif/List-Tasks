import React, { useState } from "react";
import "./style2.css";
function Ques2() {
  // UseState For Input Boxes
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // UseState for result
  const [result, setResult] = useState([]);

  const inputID = (event) => {
    // Check Validation
    if (event.target.value < 0) {
      alert("Please type positive value");
    } else {
      setId(event.target.value);
    }
  };
  const inputName = (event) => {
    setName(event.target.value);
  };
  const inputPrice = (event) => {
    // Check Validation
    if (event.target.value < 0) {
      alert("Please type positive value");
    } else {
      setPrice(event.target.value);
    }
  };
  const addProduct = () => {
    // Check Validation
    if (id === "" || name === "" || price === "" || result === "") {
      alert("Input Field can not be blank!!!");
    } else {
      let obj = {
        userId: id,
        userName: name,
        userPrice: price,
      };
      // Push Data into array
      setResult([...result, obj]);
    }
  };

  return (
    <div className="ques2">
      <h1>Ques 2</h1>
      <h3>
        Make a Products Table which should work as: 1. Fill form and submit
        values. 2. Product should add in product list and display in list below
        add product form.
      </h3>
      <span>Product ID</span>
      <input
        type={"number"}
        onChange={inputID}
        placeholder="type product id..."
      />
      <br></br>
      <span>Product Name</span>
      <input
        type={"text"}
        onChange={inputName}
        placeholder="type product name..."
      />
      <br></br>
      <span>Product Price</span>
      <input
        type={"number"}
        onChange={inputPrice}
        placeholder="type product price..."
      />
      <br></br>
      <button className="btnTask2" onClick={addProduct}>
        ADD PRODUCT
      </button>
      <div className="displayT">
        <table id="incomplete-tasks">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Price</th>
            </tr>
          </thead>
          {/* Display with the help of Map function */}
          {result.map((ele) => (
            <tbody>
              <tr key={ele.userId}>
                <td>{ele.userId}</td>
                <td>{ele.userName}</td>
                <td>{ele.userPrice}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <hr></hr>
    </div>
  );
}

export default Ques2;
