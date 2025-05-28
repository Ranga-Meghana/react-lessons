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
    setName("");
    setEmail("");
    setPassword("");
    setRePassword("");
  };

  return (
    <div>
      <h3 style={{ color: "#d86c7a" }}>Register</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Re-enter Password"
        value={rePassword}
        onChange={(e) => setRePassword(e.target.value)}
      /><br />

      <label>
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        Show Password
      </label>
      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
