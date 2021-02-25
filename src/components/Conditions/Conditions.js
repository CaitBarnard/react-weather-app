import React from "react";
import classes from "./Conditions.module.css";
// import Data from "../../data.json";

const conditions = (props) => {
  var measurement = "";

  props.unit === "metric" ? (measurement = "C") : (measurement = "F");

  function dateFormat(time) {
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(time);
  }
  return (
    <div className={classes.Wrapper}>
      {props.error && (
        <small className={classes.Small}>Please enter a valid city.</small>
      )}
      {props.loading && <div className={classes.Loader}>Loading...</div>}
      {props.responseObj.cod === 200 ? (
        <div className={classes.Wrapper}>
          <p>
            <strong>{props.responseObj.name}</strong>
          </p>
          <img
            className={classes.Icon}
            src={`http://openweathermap.org/img/wn/${props.responseObj.weather[0].icon}.png`}
            alt="Current weather icon"
          />
          <p>
            It is currently {Math.round(props.responseObj.main.temp)}
            {measurement} with {props.responseObj.weather[0].description}.
          </p>
          <p>
            Feels like {Math.round(props.responseObj.main.feels_like)}
            {measurement} with a low of{" "}
            {Math.round(props.responseObj.main.temp_min)}
            {measurement} and a high of{" "}
            {Math.round(props.responseObj.main.temp_max)}
            {measurement}.
          </p>
          <p>
            Sunrise is at {dateFormat(props.responseObj.sys.sunrise)}. Sunset is
            at {dateFormat(props.responseObj.sys.sunset)}.
          </p>
        </div>
      ) : null}
    </div>
  );
};
export default conditions;
