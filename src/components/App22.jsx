import React, { useState , useEffect} from "react";
import axios from "axios";

export default function App22() {
    // const API = import.meta.env.VITE_API_URL;
    const [msg, setMsg] = useState('');

    const fetchWeather = async () => {
        //  const url = `${API}/weather`;
        const res = await axios.get("http://localhost:8080/weather");
        setMsg(res.data);
    }
    useEffect(()=>{
        fetchWeather();
        
    },[]);
    return <div>{msg}</div>

//     const weather = async () => {
//     const url = `${API}/weather`;

//     try {
     
//       const response = await axios.get(url);

//       const weatherData = response.data;

//       setMsg(`Today's Weather is  ${weatherData} :)`);
//     } catch (error) {
//       setMsg("error");
//       console.error(error);
//     }
//   };
//   return (
//     <>
//    <button onClick={weather}>Weather</button>
//    <p>{msg}</p>
//    </>
//   );
}