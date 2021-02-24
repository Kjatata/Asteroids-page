import "./index.css";
import Nav from "./../nav";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Asteroid from "./asteroid";
import Pagination from "./../pagination";
import Filters from "./../filters";

const Asteroids = () => {
  const [asteroids, setAsteroids] = useState([]);
  const [page, setPage] = useState([1]);
  const [pagination, setPagination] = useState([]);
  const [type, setType] = useState([""]);
  const [dateMin, setDateMin] = useState("1900-01-01");
  const [dateMax, setDateMax] = useState("2100-01-01");
  const [distMin, setDistMin] = useState("0.0001");
  const [distMax, setDistMax] = useState("0.3");
  useEffect(() => {
    setAsteroids([]);
    axios
      .get(
        `https://ssd-api.jpl.nasa.gov/cad.api?des=433&date-min=${dateMin}&date-max=${dateMax}&dist-min=${distMin}&dist-max=${distMax}${type}&body=all`
      )
      .then(function (response) {
        const data = response.data.count > 0 ? response.data.data : [];
        setAsteroids(data);
        setPagination([...Array(Math.ceil(data.length / 10))]);
      });
  }, [type, dateMin, dateMax, distMin, distMax]);

  const body =
    asteroids.length === 0 ? (
      <div className="container">
        <div className="spinner-border text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ) : (
      <div>
        <Pagination pagination={pagination} setPage={setPage} />
        <div className="container">
          {asteroids.slice(page * 10 - 10, page * 10).map((data, i) => (
            <Asteroid data={data} key={i} />
          ))}
        </div>
        <Pagination pagination={pagination} setPage={setPage} />
      </div>
    );

  return (
    <>
      <Nav type="asteroids" />
      <Filters
        setType={setType}
        setDateMin={setDateMin}
        setDateMax={setDateMax}
        setDistMin={setDistMin}
        setDistMax={setDistMax}
        distMin={distMin}
        distMax={distMax}
        dateMin={dateMin}
        dateMax={dateMax}
      />
      {body}
    </>
  );
};

export default Asteroids;
