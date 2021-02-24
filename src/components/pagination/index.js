import "./index.css";

const Pagination = ({ pagination, setPage }) => (
  <div className="container" >
    <ul className="pagination">
      <li className="page-item disabled">
        <button className="page-link">&laquo;</button>
      </li>
      {pagination.map((_, i) => (
        <li className="page-item" key={i}>
          <button
            className="page-link"
            onClick={() => {
              setPage(i + 1);
            }}
          >
            {i + 1}
          </button>
        </li>
      ))}
      <li className="page-item">
        <button className="page-link">&raquo;</button>
      </li>
    </ul>
  </div>
);

export default Pagination;
