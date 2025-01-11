import './section-temperature.css'
import useGetWeather from '../hooks/useGetWeather';
import Erorr from '../Error/Error';
import Loading from '../Loading/Loading';
import {weatherIcons} from '../weatherIcons'

export default function sectionTemperature( { city }) {
    const { data } = useGetWeather({ city });

    
    if (!data) {
        return <Loading/>
    }
    if(data.cod === '404' || data.cod === '400') {  
        return <Erorr></Erorr>
    }

    const localDate = new Date()
    const timezone = data.city.timezone
    const userTimezoneOffset = localDate.getTimezoneOffset() * 60
    const getFinallyTime = new Date(localDate.getTime() + (timezone + userTimezoneOffset) * 1000)

    const hour = getFinallyTime.getHours().toString().padStart(2, '0')
    const minutes = getFinallyTime.getMinutes().toString().padStart(2, '0')
    const day = getFinallyTime.toLocaleString('en-US', {weekday: 'long'})
    const justFinally = `${hour}:${minutes} ${day}`

    const weatherMain = data.list[0].weather[0].main.toLowerCase();
    const iconName = weatherIcons[weatherMain]
    

        return (
        <section className="main-section">
            <div className="main-information">
                <div className="towm">
                    <p>{data.city.name}</p>
                    <img src="src/assets/location.png" alt="" />
                </div>

                <div className="temperature">
                    <img src="src/assets/temperature.png" alt="" />
                    <p>{data.list[0].main.temp}°C</p>
                    <img className='weather-icon' src={`src/assets/icon-weather/${iconName}`} alt="" />
                </div>

                <div className="date">
                    <p>{justFinally}</p>
                </div>

                <div className="weather-conditions">
                    <div className="weather-conditions-item">
                    <p>Humidity</p>
                    <p>{data.list[0].main.humidity}%</p>
                    </div>
                    <div className="weather-conditions-item">
                    <p>Pressure</p>
                    <p>{data.list[0].main.feels_like}°C</p>
                    </div>
                    <div className="weather-conditions-item">
                    <p>Air Pressure</p>
                    <p>{data.list[0].main.pressure} hPa</p>
                    </div>
                    <div className="weather-conditions-item">
                    <p>Wind</p>
                    <p>{data.list[0].wind.speed} mph</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
