import React, { createContext, useState } from "react";
import Register from "./Register";
import Login from "./Login";

export const AppContext = createContext();

export default function App21() {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState("home");

  const goBack = () => setView("home");

  return (
    <AppContext.Provider value={{ users, setUsers }}>
      {view === "home" && (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1 style={{ fontFamily: "Georgia", fontSize: "36px", color: "#333" }}>User Portal</h1>
          <button onClick={() => setView("register")} style={homeBtnStyle}>Register</button>
          <button onClick={() => setView("login")} style={homeBtnStyle}>Login</button>
        </div>
      )}
      {view === "register" && <Register goBack={goBack} />}
      {view === "login" && <Login goBack={goBack} />}
    </AppContext.Provider>
  );
}

const homeBtnStyle = {
  padding: "12px 24px",
  margin: "20px",
  fontSize: "16px",
  backgroundColor: "#4CAF50",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
};
