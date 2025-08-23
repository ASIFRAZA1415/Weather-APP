import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp() {

    const [WeatherInfo, setWeatherInfo] = useState({
        city: "delhi",
        feelslike:24.84,
        temp: 25.05,
        temMin: 25.05,
        temMax: 26.05,
        humidity:47,
        weather: "haze",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h2>Weather App By Asif</h2>
            <SearchBox updateInfo ={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    )
}