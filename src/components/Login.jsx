import React, { useContext, useState } from "react";
import { AppContext } from "./App21";

export default function Login() {
  const { users } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userFound, setUserFound] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const user = users.find(u => u.email === email);

    if (!user) {
      setUserFound(null);
      setErrorMessage("Oops! Not registered yet.");
    } else if (user.password !== password) {
      setUserFound(null);
      setErrorMessage("Invalid password. Please recheck.");
    } else {
      setUserFound(user);
      setErrorMessage("");
    }
  };

  return (
    <div>
      <h3 style={{ color: "#d86c7a" }}>Login</h3>
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

      <label>
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        /> Show Password
      </label><br />

      <button onClick={handleLogin}>Submit</button>

      {userFound && <p style={{ color: "green" }}>Welcome, {userFound.name}!</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}
