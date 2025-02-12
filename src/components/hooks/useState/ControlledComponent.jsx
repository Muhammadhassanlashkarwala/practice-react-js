import { useState } from "react";
export const ControlledComponent = () => {
  const [name, Setname] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    // const dataValue = document.getElementById("inputName").value;
    // console.log(dataValue); yaha pe i use totally javascript so it is a uncotrolled component kyuu ke yaha pe react use hui hi nh lekin me khai bh aagar useState ka hook ya kuch bh events use kr loog react tww woo mera controlled component ban jai ga means ab react usse handl ekare ga!!!
  };
  const handleChange = (e) => {
    Setname(e.target.value);
  };
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Controlled Component</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleChange}
          id="inputName"
          style={{
            border: "1px solid black",
            padding: "3.8px",
            outline: "none",
          }}
          type="text"
        />
        <button className="bg-black px-4 py-2 text-white">Submit</button>
      </form>
    </div>
  );
};
