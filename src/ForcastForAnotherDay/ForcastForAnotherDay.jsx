import useGetWeather from "../hooks/useGetWeather";
import Loading from "../Loading/Loading";
import './ForcastForAnotherDay.css'
import {weatherIcons} from '../weatherIcons.js'

export default function ForcastForAnotherDay({ city }) {
    const { data } = useGetWeather({ city });

    console.log(data);

    if (!data || !data.list) {
        return <Loading></Loading>; // Показываем индикатор загрузки, если данных нет
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'long', day: 'numeric' };
        return date.toLocaleString('en-US', options);
    };

    

    const forecastIndices = [2, 9, 17, 25, 33]; 

    return (
        <div className="forcast">
            {forecastIndices.map((index) => {
                const weatherMain = data.list[index].weather[0].main.toLowerCase();
                const iconName = weatherIcons[weatherMain] || 'logo-weather.png';

                return (
                    <div className="forcast-item" key={index}>
                        <p>{formatDate(data.list[index].dt_txt)}</p>
                        <img
                            className="icon-forcast"
                            src={`src/assets/icon-weather/${iconName}`}
                            alt={weatherMain}
                        />
                        <h2>{data.list[index].main.temp}°C</h2>
                    </div>
                );
            })}
        </div>
    );
}

