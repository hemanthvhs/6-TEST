import React from "react";

function Greeter({ name, age }) {
  name = "Virat"; // We can do this way. But if you use props inside the Greeter arguments & try to set the props.name = "Virat" Then there will be Type Error - Cannot assign to read only property 'name' of object
  return (
    <>
      <h1>Hi {name}</h1>
      <p>I'm {age} years old</p>
    </>
  );
}

export default Greeter;
