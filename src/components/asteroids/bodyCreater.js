import Asteroid from "./asteroid";
import Pagination from "./../pagination";

const bodyCreater = (condition, pagination, setPage, asteroids, page) => {
  switch (condition) {
    case 0:
      return (
        <div className="container">
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    case 1:
      return (
        <div>
          <Pagination pagination={pagination} setPage={setPage} page={page} />
          <div className="container">
            {asteroids.slice(page * 10 - 10, page * 10).map((data, i) => (
              <Asteroid data={data} key={i} />
            ))}
          </div>
          <Pagination pagination={pagination} setPage={setPage} page={page} />
        </div>
      );
    default:
      return (
        <div className="container">
          <h1 className="text-warning">There are no results for this query.</h1>
        </div>
      );
  }
};

export default bodyCreater;
