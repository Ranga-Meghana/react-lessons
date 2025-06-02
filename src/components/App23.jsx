import React, { useState , useEffect} from "react";
import axios from "axios";

export default function App22() {
    const [msg, setMsg] = useState('');

    const fetchWeather = async () => {
        const res = await axios.get("http://localhost:8080/weather");
        setMsg(res.data);
    }
    useEffect(()=>{
        fetchWeather();
        
    },[]);
    return <div>{msg}</div>
}