import React, { useState } from "react";

export default function App7() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [txt, setTxt] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleSubmit = () => {
    if (user.name && user.age && user.city) {
      setUsers([...users, user]);
      alert(`${user.name} added successfully!`);
      setUser({});
    } else {
      alert("Please fill all fields.");
    }
  };

  const handleSearch = () => {
    setFiltered(users.filter((value) => value.city.toLowerCase() === txt.toLowerCase()));
  };

  const handleDelete = (n) => {
    setUsers(users.filter((value) => value.name !== n));
    alert(`${n} has been removed.`);
  };

  const resetSearch = () => {
    setFiltered([]);
    setTxt("");
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1 style={{ color: "#4B0082" }}>App7</h1>
      <h2>useState with Arrays and Objects</h2>

      <div style={{ background: "#f0f0f0", padding: "15px", borderRadius: "8px" }}>
        <h3>Registration Form</h3>
        <p>
          <input
            type="text"
            value={user.name || ""}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Enter Name"
          />
        </p>
        <p>
          <input
            type="text"
            value={user.age || ""}
            onChange={(e) => setUser({ ...user, age: e.target.value })}
            placeholder="Enter Age"
          />
        </p>
        <p>
          <input
            type="text"
            value={user.city || ""}
            onChange={(e) => setUser({ ...user, city: e.target.value })}
            placeholder="Enter City"
          />
        </p>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div>
        <h3>👥 Registered Users</h3>
        <ol>
          {users.map((value, index) => (
            <li key={value.name}>
              {index + 1}. {value.name} - {value.age} - {value.city}
              <button onClick={() => handleDelete(value.name)} style={{ marginLeft: "10px" }}>
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>🔍 Search by City</h3>
        <input
          type="text"
          value={txt}
          placeholder="Enter City"
          onChange={(e) => setTxt(e.target.value)}
        />
        <button onClick={handleSearch} style={{ marginLeft: "10px" }}>
          Search
        </button>
        <button onClick={resetSearch} style={{ marginLeft: "10px" }}>
          Reset
        </button>
        <ol>
          {filtered.map((value, index) => (
            <li key={value.name}>
              {index + 1}. {value.name} - {value.age} - {value.city}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
