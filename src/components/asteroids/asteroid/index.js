import "./index.css";
const asteroid = ({ data }) => {
  return (
    <div className="card mb-3" key={data[12]}>
      <h4 className="card-header">{data[0]}</h4>
      <div className="card-body">
        <h6 className="card-title">
          Closely approximated to <strong>{data[10]}</strong>
        </h6>
      </div>
      <div className="card-img"></div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">min dist: {data[5]}</li>
        <li className="list-group-item">max dist: {data[6]}</li>
        <li className="list-group-item"> absolute magnitude H: {data[11]}</li>
      </ul>
    </div>
  );
};

export default asteroid;
