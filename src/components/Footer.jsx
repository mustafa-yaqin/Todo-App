function Footer({ itemsLeft, clearCompleted }) {
  return (
    <footer>
      <p id="items-left">
        {itemsLeft} item{itemsLeft !== 1 ? "s" : ""} left
      </p>
      <button id="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
