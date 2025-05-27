import React, { useState, createContext } from "react";
import Register from "./Register";
import Login from "./Login";

export const AppContext = createContext();

export default function App21() {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState(""); 

  const containerStyle = {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
  };

  const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    cursor: "pointer",
  };

  return (
    <AppContext.Provider value={{ users, setUsers }}>
      <div style={containerStyle}>
        {view === "" && (
          <>
            <h2>Welcome! Choose an option:</h2>
            <button style={buttonStyle} onClick={() => setView("login")}>Login</button>
            <button style={buttonStyle} onClick={() => setView("register")}>Register</button>
          </>
        )}
        {view === "register" && <Register />}
        {view === "login" && <Login />}
      </div>
    </AppContext.Provider>
  );
}
