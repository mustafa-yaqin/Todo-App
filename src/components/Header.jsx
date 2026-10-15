function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <header>
      <h1>
        <i className="fas fa-check-circle"></i>
        My Tasks
      </h1>
      <p>{today}</p>
    </header>
  );
}

export default Header;
