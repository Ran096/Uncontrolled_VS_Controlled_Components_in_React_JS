import "./styles.css";
import React from "react";
export default function App() {
  let name = React.createRef();
  let age = React.createRef();

  const getName = (event) => {
    console.log(event.target.value);
  };
  const getAge = (event) => {
    console.log(event.target.value);
  };
  const submitData = () => {
    console.log(name.current.value);
    console.log(age.current.value);
  };
  return (
    <div className="App">
      {/*       uncontronal components */}
      {/*   <input placeholder="Enter Name" ref={name} />
      <br />
      <br />
      <input placeholder="enter age" ref={age} />
      <br />
      <br /> */}
      <h1>Contronal components</h1>
      <input placeholder="Enter Name" onChange={getName} />
      <br />
      <br />
      <input placeholder="enter age" onChange={getAge} />
      <br />
      <br />
      <button onClick={submitData}>Submit</button>
    </div>
  );
}
