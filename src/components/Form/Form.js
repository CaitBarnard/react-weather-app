import classes from "../Form/Form.module.css";

const Form = (props) => {
  return (
    <form onSubmit={props.getForecast}>
      <input
        type="text"
        placeholder="Enter City"
        maxLength="50"
        className={classes.textInput}
        value={props.city}
        onChange={(e) => props.setCity(e.target.value)}
      />
      <label className={classes.Radio}>
        <input
          type="radio"
          name="units"
          checked={props.unit === "metric"}
          value="metric"
          onChange={(e) => props.setUnit(e.target.value)}
        />
        Celcius
      </label>
      <label className={classes.Radio}>
        <input
          type="radio"
          name="units"
          checked={props.unit === "imperial"}
          value="imperial"
          onChange={(e) => props.setUnit(e.target.value)}
        />
        Fahrenheit
      </label>
      <button className={classes.Button} type="submit">
        Get Forecast
      </button>
    </form>
  );
};

export default Form;
