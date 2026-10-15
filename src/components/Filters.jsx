function Filters({ filter, setFilter }) {
  return (
    <div className="filters">
      <span
        className={filter === "all" ? "filter active" : "filter"}
        onClick={() => setFilter("all")}
      >
        All
      </span>
      <span
        className={filter === "active" ? "filter active" : "filter"}
        onClick={() => setFilter("active")}
      >
        Active
      </span>
      <span
        className={filter === "completed" ? "filter active" : "filter"}
        onClick={() => setFilter("completed")}
      >
        Completed
      </span>
    </div>
  );
}

export default Filters;
