import "./index.css";

const Filters = ({
  setType,
  setDateMin,
  setDateMax,
  setDistMin,
  setDistMax,
  distMax,
  distMin,
  dateMin,
  dateMax,
}) => (
  <div className="container">
    <div className="form-group">
      <h5 className="text-warning">Type</h5>
      <div className="text-warning">slect a type</div>
      <select
        className="form-control"
        id="exampleSelect1"
        onChange={(event) =>
          event.target.value === "all"
            ? setType("")
            : setType(`&${event.target.value}=true`)
        }
      >
        <option value="all">All</option>
        <option value="pha">PHAs</option>
        <option value="nea">NEAs</option>
        <option value="comet">Comets</option>
        <option value="nea-comet">NEAs and Comets</option>
        <option value="neo">NEOs</option>
      </select>
    </div>
    <div>
      <h5 className="text-warning">Data</h5>
      <div className="text-warning">exclude data earlier than this date</div>
      <input
        type="date"
        className="form-control filter-input"
        value={dateMin}
        onChange={(event) => setDateMin(`${event.target.value}`)}
      />
      <div className="text-warning">exclude data later than this date</div>
      <input
        type="date"
        className="form-control filter-input"
        value={dateMax}
        onChange={(event) => setDateMax(event.target.value)}
      />
    </div>
    <div className="form-group">
      <h5 className="text-warning">Distance</h5>
      <div className="text-warning">
        exclude data with an approach distance less than this
      </div>
      <input
        type="number"
        className="form-control"
        placeholder="0.3"
        value={distMin}
        onChange={(event) => setDistMin(event.target.value)}
      />
      <div className="text-warning">
        exclude data with an approach distance greater than this
      </div>
      <input
        type="number"
        className="form-control"
        placeholder="0.0001"
        value={distMax}
        onChange={(event) => setDistMax(event.target.value)}
      />
    </div>
  </div>
);

export default Filters;
