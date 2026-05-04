// My page
import { useEffect } from "react";

export default function WeatherPage() {
  useEffect(() => {
    async function fetchWeather() {
      const res = await fetch(
        "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.39&lon=5.32"
      );

      const data = await res.json();
      console.log("WEATHER DATA:", data);
    }

    fetchWeather();
  }, []);

  return <div>Nowcast is running</div>;
}