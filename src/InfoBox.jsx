import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';




export default function InfoBox({info}){

    const INIT_URL = "https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

   const HOT_URL = "https://media.istockphoto.com/id/1410180885/photo/hot-temperature-thermometer-on-yellow-sky-with-sun-shining.jpg?s=612x612&w=is&k=20&c=rZMf0uIGYwYUaNBVjwvdB7ITVJa9dOcrLqbNtJjcN8o=";
   const COLD_URL = "https://images.unsplash.com/photo-1550077404-c00d89693129?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
   const RAIN_URL ="https://media.istockphoto.com/id/105934727/photo/rain.jpg?s=612x612&w=is&k=20&c=qjmanyBE0Db4HG_AMBzvBNfyOq4xGheeuiDBzE0FLUo=";
    return(

        <div className="InfoBox ">
            {/* <h1>WeatherInfo</h1> */}
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 
          ?RAIN_URL 
          : info.temp > 15 
          ?HOT_URL 
            : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} 
     </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature = {info.temp}&deg;C </p>
         <p>Humidity = {info.humidity} </p>
         <p>Min Tem = {info.temMin}&deg;C</p>
         <p>Max Tem = {info.temMax}&deg;C</p>
         <p>The weather can descrubed as <i>{info.weather}</i> and feels like = {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>

        </div>
    )
}