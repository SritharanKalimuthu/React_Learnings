import { useState } from 'react'
import './App.css'
// import for background video.
import video from './assets/Images/bg.mp4'

function App() {
//Enter API key from openweather.
  const Apikey = ``;

// usestate components to maintain states across weather container.
  const [weather,setWeather] = useState(false)
  const [loader,setLoader] = useState(false) 
  const [error,setError] =  useState({display:false,error_message:''})
  const [city,setCity] = useState('')
  const [icon,setIcon] = useState('')
  const [temperature,setTemperature] = useState(0)
  const [description,setDescription] = useState('')
  const [location,setLocation] = useState('')
  const [feelslike,setFeelslike] = useState (0)
  const [humidity,setHumidity] = useState (0)
  const [windspeed,setWindspeed] = useState(0)


// onchange event function to handle input changes.
  const handleInput = (e) => {
      let input = e.target.value;
      setCity(input);
  }

// Asynchronous function to fetch weather from openweather.org.
  async function getWeatherData(e) {
      e.preventDefault();
      setError({...error,display:false,error_message:''})
      setWeather(false)
      setLoader(true)
      if(city===''){
        setLoader(false)
        setError({...error,display:true,error_message:'Enter a location to get weather !'})
      }else{
        try {
            let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=metric`)
            .then((response)=>response.json())
    
            if(data.cod==200){
    
                setIcon(data.weather[0].icon)
                setTemperature(Math.floor(data.main.temp))
                setDescription(data.weather[0].description)
                setLocation(data.name)
                setFeelslike(data.main.feels_like)
                setHumidity(data.main.humidity)
                setWindspeed(data.wind.speed)
    
    
                setWeather(true)
    
            }else if(data.cod==404){
                setWeather(false)
                setError({...error,display:true,error_message:data.message})
    
            }else{
                setLoader(false)
                setError({...error,display:true,error_message:'Server Issue...! Please try again later !'})
            }
    
            setLoader(false)
                    
          }catch(error){
            if(TypeError){
                setLoader(false)
            setError({...error,display:true,error_message:'Check your Internet Connection'})
            }   
          }finally{
            setCity('')
          } 
      }
        
  }
// React weather component.
  return (
        <main>
            <video autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <h1 className='title'>Weather today...!</h1>
            <div className="container">
                <form>
                    <input type="text" className="search-bar" placeholder="Enter the Location" spellCheck="false" onChange={handleInput} value={city}/>
                    <button type="submit" className="search-btn" onClick={getWeatherData}>
                        <ion-icon name="search-sharp"></ion-icon>
                    </button>
                </form>
                {loader&&<span className='loader'></span>}
                {error.display&&<p className='error-message'>{error.error_message}</p>}
                <div className={weather?'displayweather':'hideweather'}>
                    <div className="weather-updates">
                        <div>
                            {icon&&<img src={`https://openweathermap.org/img/wn/${icon}.png`} className='icon' alt="Weather_Icon"/>}
                        </div>
                        <h1>{temperature}°C</h1>
                        <h2>{description}</h2>
                        <p><ion-icon name="location" id="location-icon"></ion-icon>{location}</p>
                    </div>
                    <div className="other-updates">
                        <div className="cols">
                            <p  className='update-metrics'>{feelslike} °C</p>
                            <ion-icon name="cloud-circle" id="updates-icon"></ion-icon>
                            <p className='update-titles'>Feels Like</p>
                        </div>
                        <div className="cols">
                            <p className='update-metrics'>{humidity}%</p>
                            <ion-icon name="water" id="updates-icon"></ion-icon>
                            <p className='update-titles'>Humidity</p>
                        </div>
                        <div className="cols">
                            <p className='update-metrics'>{windspeed} m/s</p>
                            <ion-icon name="speedometer" id="updates-icon"></ion-icon>
                            <p className='update-titles'>Wind-Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
}

export default App
