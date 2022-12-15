import React from "react";
import "./YearCard.css";
import { useState, useEffect } from "react";
import Field from "./Field";

function YearCard({ val }) {
  const [reset, setReset] = useState(false);
  const initState = {
    Jan: false,
    Feb: false,
    Mar: false,
    Apr: false,
    May: false,
    Jun: false,
    Jul: false,
    Aug: false,
    Sep: false,
    Oct: false,
    Nov: false,
    Dec: false,
  };
  const initField = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  };
  const [call, setCall] = useState(false);
  const [state, setState] = useState({
    Jan: false,
    Feb: false,
    Mar: false,
    Apr: false,
    May: false,
    Jun: false,
    Jul: false,
    Aug: false,
    Sep: false,
    Oct: false,
    Nov: false,
    Dec: false,
  });
  const [field, setField] = useState({
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  });

  let hash = Object.keys(field);
  console.log(hash);
  console.log(field[hash[0]]);

  const [value, setValue] = useState(false);

  return (
    <div className="yearMain">
      <div className="reset">
        <button
          onClick={() => {
            setReset(true);
          }}
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-3"
        >
          reset
        </button>
      </div>
      <div className="">
        <h1 className="text-base text-center">{val}</h1>
        <select
          className="dropbox"
          onChange={(e) => {
            setValue(parseInt(e.target.value));
            setCall(false);
          }}
        >
          <option selected disabled hidden></option>
          <option value="1">Jan - Apr</option>
          <option value="5">May - Aug</option>
          <option value="9">Sep - Dec</option>
        </select>
      </div>
      {value && (
        <Field
          value={value}
          field={field}
          setField={setField}
          state={state}
          setState={setState}
          hash={hash.slice(value - 1, value + 3)}
          call={call}
          setCall={setCall}
          reset={reset}
          setReset={setReset}
        />
      )}
      <div className="calculate">
        <button
          onClick={() => {
            setCall(true);
          }}
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-3"
        >
          calculate
        </button>
      </div>
    </div>
  );
}

export default YearCard;
