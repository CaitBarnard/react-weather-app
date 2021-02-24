import React from "react";
import classes from "./Conditions.module.css";
// import Data from "../../data.json";

const conditions = (props) => {
  function dateFormat(time) {
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
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
            It is currently {Math.round(props.responseObj.main.temp)} degrees
            with {props.responseObj.weather[0].description}. Sunrise is at {dateFormat(props.responseObj.sys.sunrise)}. Sunset is at {dateFormat(props.responseObj.sys.sunset)}.
          </p>
        </div>
      ) : null}
    </div>
  );
};
export default conditions;
