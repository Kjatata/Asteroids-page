import "./index.css";

const Pagination = ({ pagination, setPage, page }) => (
  <div className="container">
    <ul className="pagination">
      <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
        <button
          className="page-link"
          onClick={() => (page > 1 ? setPage(page - 1) : null)}
        >
          &laquo;
        </button>
      </li>
      {pagination.map((_, i) => (
        <li className="page-item" key={i}>
          <button
            className={`page-link ${i + 1 === page ? "page-selected" : ""}`}
            onClick={() => {
              console.log(page);
              setPage(i + 1);
            }}
          >
            {i + 1}
          </button>
        </li>
      ))}
      <li
        className={`page-item ${page === pagination.length ? "disabled" : ""}`}
      >
        <button
          className="page-link"
          onClick={() => (page < pagination.length ? setPage(page + 1) : null)}
        >
          &raquo;
        </button>
      </li>
    </ul>
  </div>
);

export default Pagination;
