import React, { useContext, useState } from "react";
import { AppContext } from "./App21";

export default function Register({ goBack }) {
  const { users, setUsers } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    if (password !== rePassword) {
      alert("Passwords do not match.");
      return;
    }
    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    alert("User registered successfully.");
    setName(""); setEmail(""); setPassword(""); setRePassword("");
  };

  const containerStyle = {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    fontFamily: "Segoe UI"
  };

  const inputStyle = {
    padding: "10px",
    margin: "10px 0",
    width: "100%",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "15px"
  };

  const buttonStyle = {
    padding: "12px",
    width: "100%",
    marginTop: "15px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer"
  };

  const backBtnStyle = {
    background: "none",
    border: "none",
    color: "#4CAF50",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "20px"
  };

  return (
    <div style={containerStyle}>
      <button onClick={goBack} style={backBtnStyle}>← Back</button>
      <h2 style={{ textAlign: "center", color: "#333" }}>Register</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} /><br />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} /><br />
      <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} /><br />
      <input type={showPassword ? "text" : "password"} placeholder="Re-enter Password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} style={inputStyle} /><br />
      <label style={{ fontSize: "14px" }}>
        <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} style={{ marginRight: "6px" }} />
        Show Password
      </label><br />
      <button onClick={handleSubmit} style={buttonStyle}>Submit</button>
    </div>
  );
}
