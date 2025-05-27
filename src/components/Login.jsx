import React, { useContext, useState } from "react";
import { AppContext } from "./App21";

export default function Login() {
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
      alert(`Welcome back, ${user.name}!`);
    }

    setEmail("");
    setPassword("");
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
    backgroundColor: "#2196F3",
    color: "white",
    cursor: "pointer"
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h3>Login</h3>
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
      <label style={{ fontSize: "14px" }}>
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
          style={{ marginRight: "6px" }}
        />
        Show Password
      </label><br />
      <button onClick={handleLogin} style={buttonStyle}>Login</button>
    </div>
  );
}
