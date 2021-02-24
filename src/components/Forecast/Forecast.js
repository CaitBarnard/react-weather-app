import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";
import Form from "../Form/Form";

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("metric");
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  function getForecast(e) {
    e.preventDefault();
    if (city.length === 0) {
      return setError(true);
    }

    setError(false);
    setResponseObj({});

    setLoading(true);

    let uriEncodedCity = encodeURIComponent(city);

    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?q=${uriEncodedCity}&units=${unit}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.cod !== 200) {
          throw new Error(`Request failed with code ${response.cod}`);
        }

        setResponseObj(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.error(err);
      });
  }
  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <Form
        getForecast={getForecast}
        city={city}
        setCity={setCity}
        unit={unit}
        setUnit={setUnit}
      />
      <Conditions responseObj={responseObj} error={error} loading={loading} />
    </div>
  );
};
export default Forecast;
