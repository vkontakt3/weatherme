import { useEffect, useState } from "react";
import CONFIG from "../config";

export default function useGetWeather({ city }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!city) return;
        fetch(`${CONFIG.BASE_URL}forecast?q=${city}&appid=${CONFIG.API_KEY}&units=metric`)
            .then((res) => res.json())
            .then((data) => {
                setData(data); 
            });
    }, [city]);

    return { data };
}
