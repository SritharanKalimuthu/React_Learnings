import { useState, useEffect } from 'react';
import "./App.css"
import video from './assets/Images/bg.mp4'
import WeatherLoader from "./components/Loader/Loader"
import GeolocationPopup from "./components/Popup/Popup";


function App() {
  const Apikey = `ee46f080eb4a7f83bf9d0ecbd17c9951`; 

  // State management
  const [weather, setWeather] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState({ display: false, error_message: '' });
  const [city, setCity] = useState('');
  const [icon, setIcon] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [feelslike, setFeelslike] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [windspeed, setWindspeed] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [visibility, setVisibility] = useState(0);
  const [uvIndex, setUvIndex] = useState(0);
  
  // New states for popup and loading
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [showLocationPopup, setShowLocationPopup] = useState(false);

  // App initialization
  useEffect(() => {
    // Simulate app loading time
    const loadingTimer = setTimeout(() => {
      setIsAppLoading(false);
      setShowLocationPopup(true);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  // Handle location permission allow
  const handleLocationAllow = () => {
    setShowLocationPopup(false);
    setLoader(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude);
          console.log(latitude,longitude);
        },
        (error) => {
          console.log('Location access denied, showing Chennai weather');
          fetchWeatherByCity('Chennai');
        }
      );
    } else {
      fetchWeatherByCity('Chennai');
    }
  };

  // Handle location permission deny
  const handleLocationDeny = () => {
    setShowLocationPopup(false);
    setLoader(true);
    fetchWeatherByCity('Chennai');
  };

  // Fetch weather by coordinates
  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Apikey}&units=metric`
      );
      const data = await response.json();
      console.log(data);
      if (data.cod === 200) {
        updateWeatherData(data);
        setWeather(true);
      }
    } catch (error) {
      setError({ display: true, error_message: 'Failed to fetch weather data' });
    }
    setLoader(false);
  };

  // Fetch weather by city name
  const fetchWeatherByCity = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Apikey}&units=metric`
      );
      const data = await response.json();
      
      if (data.cod === 200) {
        updateWeatherData(data);
        setWeather(true);
      }
    } catch (error) {
      setError({ display: true, error_message: 'Failed to fetch weather data' });
    }
    setLoader(false);
  };

  // Update weather data state
  const updateWeatherData = (data) => {
    setIcon(data.weather[0].icon);
    setTemperature(Math.floor(data.main.temp));
    setDescription(data.weather[0].description);
    setLocation(data.name);
    setFeelslike(Math.floor(data.main.feels_like));
    setHumidity(data.main.humidity);
    setWindspeed(data.wind.speed);
    setPressure(data.main.pressure);
    setVisibility(Math.floor(data.visibility / 1000));
    setUvIndex(Math.floor(Math.random() * 10));
  };

  // Handle input changes
  const handleInput = (e) => {
    setCity(e.target.value);
  };

  // Handle search
  const handleSearch = async () => {
    setError({ display: false, error_message: '' });
    setWeather(false);
    
    if (city === '') {
      setError({ display: true, error_message: 'Enter a location to get weather!' });
      return;
    }

    setLoader(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=metric`
      );
      const data = await response.json();

      if (data.cod === 200) {
        updateWeatherData(data);
        setWeather(true);
      } else if (data.cod === 404) {
        setError({ display: true, error_message: data.message });
      } else {
        setError({ display: true, error_message: 'Server issue! Please try again later.' });
      }
    } catch (error) {
      setError({ display: true, error_message: 'Check your internet connection' });
    }
    
    setLoader(false);
    setCity('');
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // 3D Weather Icon Component
  const WeatherIcon3D = ({ iconCode }) => {
    const getWeatherSVG = (code) => {
      const iconMap = {
        '01d': '☀️', '01n': '🌙', '02d': '⛅', '02n': '☁️',
        '03d': '☁️', '03n': '☁️', '04d': '☁️', '04n': '☁️',
        '09d': '🌧️', '09n': '🌧️', '10d': '🌦️', '10n': '🌧️',
        '11d': '⛈️', '11n': '⛈️', '13d': '❄️', '13n': '❄️',
        '50d': '🌫️', '50n': '🌫️'
      };
      return iconMap[code] || '🌤️';
    };

    return (
      <div className="weather-icon-3d">
        <div className="icon-sphere">
          <span className="weather-emoji">{getWeatherSVG(iconCode)}</span>
        </div>
      </div>
    );
  };

  // 3D Metric Card Component
  const MetricCard3D = ({ value, unit, icon, title }) => (
    <div className="metric-card-3d">
      <div className="metric-value">{value}{unit}</div>
      <div className="metric-icon-3d">
        {icon}
      </div>
      <div className="metric-title">{title}</div>
    </div>
  );

  // Simple Search Loader
  const Loader3D = () => (
    <div className="loader-3d">
      <div className="weather-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>
      <div className="loader-text">Loading Weather...</div>
    </div>
  );

  // Show app loader first
  if (isAppLoading) {
    return <WeatherLoader />;
  }

  return (
    <>

      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

      {showLocationPopup && (
        <GeolocationPopup 
          onAllow={handleLocationAllow}
          onDeny={handleLocationDeny}
        />
      )}
      
      <main>
        <div className="floating-elements">
          <div className="cloud-1"></div>
          <div className="cloud-2"></div>
          <div className="cloud-3"></div>
        </div>

        <h1 className="title">
          <span className="title-word">Weather</span>
          <span className="title-word">Today</span>
        </h1>
        
        <div className="container">
          <div className="search-container-3d">
            <input 
              type="text" 
              className="search-bar-3d" 
              placeholder="Enter location..." 
              spellCheck="false" 
              onChange={handleInput} 
              onKeyPress={handleKeyPress}
              value={city}
            />
            <button className="search-btn-3d" onClick={handleSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M15.096 5.904a6.5 6.5 0 1 0-9.192 9.192a6.5 6.5 0 0 0 9.192-9.192M4.49 4.49a8.5 8.5 0 0 1 12.686 11.272l5.345 5.345l-1.414 1.414l-5.345-5.345A8.501 8.501 0 0 1 4.49 4.49"/></svg>
            </button>
          </div>

          {loader && <Loader3D />}
          
          {error.display && (
            <div className="error-message-3d">
              <div className="error-icon">⚠️</div>
              <p>{error.error_message}</p>
            </div>
          )}

          <div className={weather ? 'weather-display' : 'weather-hidden'}>
            <div className="main-weather-info">
              <WeatherIcon3D iconCode={icon} />
              <div className="temperature-display">
                <span className="temperature-main">{temperature}</span>
                <span className="temperature-unit">°C</span>
              </div>
              <h2 className="weather-description">{description}</h2>
              <div className="location-display">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>{location}</span>
              </div>
            </div>

            <div className="weather-metrics-grid">
              <MetricCard3D 
                value={feelslike} 
                unit="°C" 
                icon={<span>🌡️</span>}
                title="Feels Like"
              />
              <MetricCard3D 
                value={humidity} 
                unit="%" 
                icon={<span>💧</span>}
                title="Humidity"
              />
              <MetricCard3D 
                value={windspeed} 
                unit=" m/s" 
                icon={<span>💨</span>}
                title="Wind Speed"
              />
              <MetricCard3D 
                value={pressure} 
                unit=" hPa" 
                icon={<span>🌀</span>}
                title="Pressure"
              />
              <MetricCard3D 
                value={visibility} 
                unit=" km" 
                icon={<span>👁️</span>}
                title="Visibility"
              />
              <MetricCard3D 
                value={uvIndex} 
                unit="" 
                icon={<span>☀️</span>}
                title="UV Index"
              />
            </div>
          </div>
        </div>
      </main>
    </>
 )
}

export default App;