import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("") ;
    let [error, seteError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "5d9550961a55c2749b13e2e28ce7f45e";

    let getWeatherInfo = async () => {
        try{

            let response =  await fetch (`${API_URL}?q=${city}&appid=${API_KEY}`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      let  result = {
        city:city,
        temp: jsonResponse.main.temp,
        temMin: jsonResponse.main.temp_min,
        temMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
        
        
        
      }
      console.log(result);
      return result;
        }catch(err) {
            throw err;
        }
      
        };

let handelChange = (event) => {
    setCity(event.target.value);
};

let handelSubmit = async(event) =>{
    try{
        event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    }catch(err){
        seteError(true);
    }
    
}
    return(
        <div className='SearchBox'>
            {/* <h3>Search for the weather</h3> */}

            <form onSubmit={handelSubmit}>
            <TextField id="city" 
            label="City Name" 
            variant="outlined" 
            required
             value={city}
             onChange={handelChange}/> 

          
           <br></br><br></br>

            <Button variant="contained"
             type='submit'  >
        Submit      </Button>

        {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}