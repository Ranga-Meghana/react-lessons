import React, { useContext, useState } from "react";
import { AppContext } from "./App21";

export default function Register() {
  const { users, setUsers } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    if (password !== rePassword) {
      alert("Passwords do not match!");
      return;
    }
    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    alert("User registered!");
    setName(""); setEmail(""); setPassword(""); setRePassword("");
  };

  const inputStyle = {
    padding: "8px",
    margin: "6px 0",
    width: "250px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  };

  const buttonStyle = {
    padding: "10px 20px",
    marginTop: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer"
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h3>Register</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      /><br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      /><br />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      /><br />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Re-enter Password"
        value={rePassword}
        onChange={(e) => setRePassword(e.target.value)}
        style={inputStyle}
      /><br />
      <label style={{ fontSize: "14px" }}>
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
          style={{ marginRight: "6px" }}
        />
        Show Password
      </label><br />
      <button onClick={handleSubmit} style={buttonStyle}>Submit</button>
    </div>
  );
}
