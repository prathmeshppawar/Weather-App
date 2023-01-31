import React, { useState } from "react";

const Home = () => {
    const [city, setCity] = useState("");
    const [city2, setCity2] = useState("");
    const [success, setSuccess] = useState(false);
    const [tempdata, setTempdata]= useState({temp:"", feels_like:"",humidity:"",wind_speed:""})
    const handleChange = (e) => {
        e.preventDefault();
        setCity(e.target.value);
    }
    const capitalize = (word) => {
        let lower = word;
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7dad4c7b99msh830dd0f9e28c5e9p171d8fjsn5c19f37e2092',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    const fetchTemp = async(e) => {
        e.preventDefault();
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        const json = await response.json();
        console.log(json);
        if(!json.error){
            setSuccess(true);
            setCity2(city);
            setCity("");
            setTempdata({temp:json.temp,feels_like:json.feels_like,humidity:json.humidity,wind_speed:json.wind_speed })
        }else{
            alert("Enter valid city name.")
            setCity("");
        }
    }

    return (
        <div className="home">
            <form className="mb-4" onSubmit={fetchTemp}>
            <input type="text" className="search" placeholder="Search..." id="myInput" value={city} onChange={handleChange} />
            </form>
            
            {success?<div className="city">
                <h2 className="city-name">
                    <span>{capitalize(city2)}</span>
                    {/* <sup>IN</sup> */}
                </h2>
                <div className="city-temp">
                    {tempdata.temp}<sup>°C</sup>
                </div>
                <div className="city-data">
                    <pre>Feels like -   {tempdata.feels_like} °C</pre><hr />
                    <pre>Humidity -     {tempdata.humidity}%</pre><hr />
                    <pre>Wind Speed -   {tempdata.wind_speed} m/s</pre>
                </div>
            </div>:<div></div>}
        </div>
    );
};

export default Home;


