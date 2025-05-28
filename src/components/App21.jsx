import React, { createContext, useState } from "react";
import Register from "./Register";
import Login from "./Login";
import "./App21.css";

export const AppContext = createContext();

export default function App21() {
  const [users, setUsers] = useState([]);

  return (
    <>
      <h1 className="animated-title">App21</h1>
      <div className="app-container">
        <AppContext.Provider value={{ users, setUsers }}>
          <div className="section-container">
            <div className="box">
              <Register />
            </div>
            <div className="box">
              <Login />
            </div>
          </div>

          <div className="user-list">
            <h3 style={{ color: "#d86c7a" }}>Registered Users</h3>
            {users.length === 0 ? (
              <p>No users registered yet.</p>
            ) : (
              <ul>
                {users.map((user, index) => (
                  <li key={index} className="user-item">
                    <span className="avatar">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                    <div>
                      <strong>{user.name}</strong> - {user.email}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </AppContext.Provider>
      </div>
    </>
  );
}
