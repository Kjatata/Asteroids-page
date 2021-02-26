import "./index.css";
import Nav from "./../nav";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Filters from "./../filters";
import bodyCreater from "./bodyCreater";

const Asteroids = () => {
  const [asteroids, setAsteroids] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [type, setType] = useState([""]);
  const [dateMin, setDateMin] = useState("1900-01-01");
  const [dateMax, setDateMax] = useState("2100-01-01");
  const [distMin, setDistMin] = useState(0.0001);
  const [distMax, setDistMax] = useState(0.3);
  const [condition, setCondition] = useState(0);

  useEffect(() => {
    setCondition(0);
    axios
      .get(
        `https://ssd-api.jpl.nasa.gov/cad.api?des=433&date-min=${dateMin}&date-max=${dateMax}&dist-min=${distMin}&dist-max=${distMax}${type}&body=all`
      )
      .then(function (response) {
        if (response.data.count > 0) {
          setCondition(1);
          setAsteroids(response.data.data);
          setPagination([...Array(Math.ceil(response.data.data.length / 10))]);
        } else {
          setCondition(2);
          setPagination([...Array(0)]);
        }
      });
  }, [type, dateMin, dateMax, distMin, distMax]);

  return (
    <>
      <Nav type="asteroids" />
      <Filters
        setType={setType}
        setDateMin={setDateMin}
        setDateMax={setDateMax}
        setDistMin={setDistMin}
        setDistMax={setDistMax}
        dateMin={dateMin}
        dateMax={dateMax}
      />
      {bodyCreater(condition, pagination, setPage, asteroids, page)}
    </>
  );
};

export default Asteroids;
