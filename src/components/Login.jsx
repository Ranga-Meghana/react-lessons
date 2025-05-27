import React, { useContext, useState } from "react";
import { AppContext } from "./App21";

export default function Login({ goBack }) {
  const { users } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const user = users.find((u) => u.email === email);

    if (!user) {
      alert("User not found. Please register.");
    } else if (user.password !== password) {
      alert("User found, but incorrect password.");
    } else {
      alert(`Welcome back, ${user.name}.`);
    }

    setEmail("");
    setPassword("");
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
    backgroundColor: "#2196F3",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer"
  };

  const backBtnStyle = {
    background: "none",
    border: "none",
    color: "#2196F3",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "20px"
  };

  return (
    <div style={containerStyle}>
      <button onClick={goBack} style={backBtnStyle}>← Back</button>
      <h2 style={{ textAlign: "center", color: "#333" }}>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} /><br />
      <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} /><br />
      <label style={{ fontSize: "14px" }}>
        <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} style={{ marginRight: "6px" }} />
        Show Password
      </label><br />
      <button onClick={handleLogin} style={buttonStyle}>Login</button>
    </div>
  );
}
