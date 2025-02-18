import { useState } from "react";
import "./index.css";
export const RegistrationComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const setInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;

      case "lastName":
        setLastName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "number":
        setNumber(value);
        break;
    }
  };

  const handleSubmitChange = (e) => {
    e.preventDefault();
   const formData = {
    firstName,
    lastName,
    email,
    password,
    number  
  };
  console.log(formData);
  }
  return (
    <>
      <form onSubmit={handleSubmitChange}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill this form to create an account.</p>
          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input className="p-4 text-2xl" 
            type="text"
            name="firstName"
            placeholder="Enter firstName"
            required
            value={firstName}
            onChange={setInputChange}
          />
          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter lastName"
            required
            value={lastName} className="p-4 text-2xl"
            onChange={setInputChange}
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required className="p-4 text-2xl"
            value={email}
            onChange={setInputChange}
          />
          <label htmlFor="email">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required className="p-4 text-2xl"
            value={password}
            onChange={setInputChange}
          />
          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>
          <input
            type="number"
            name="number"
            placeholder="987654321"
            required className="p-4 text-2xl"
            value={number}
            onChange={setInputChange}
          />
          <p>
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms and Privacy
            </a>
          </p>
          <div className="clearfix">
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>

      <section
        className="summary"
        style={{ textAlign: "center"}}
      >
        <p>
          Hello, my name is
          <span>
            {" "}
            {firstName} {lastName}
          </span>
          . My email address is <span>{email}</span> and my phone number is{" "}
          <span>{number}</span>
        </p>
      </section>
    </>
  );
};
