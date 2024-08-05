export const Tasks = () => {
  return (
    <>
      <header className="app-header">
        <span className="logo">TODOS</span>
        <div className="profile">
          <span className="profile__name">Pavellbor</span>
          <button className="button profile__logout-button">
            <i className="bi bi-box-arrow-right"></i>
          </button>
        </div>
      </header>

      <aside className="app-filters">
        <section className="toggle-group">
          <button className="button button--primary">All</button>
          <button className="button">Active</button>
          <button className="button">Done</button>
        </section>
      </aside>

      <main className="app-main">
        <ul className="todo-list">
          <li className="todo-item todo-item--done">
            <div className="todo-item__status">
              <i className="bi bi-check2"></i>
            </div>
            <span className="todo-item__text">Learn the basics of Vue</span>
            <button className="todo-item__remove-button">
              <i className="bi bi-trash3"></i>
            </button>
          </li>
          <li className="todo-item">
            <div className="todo-item__status">
              <i className="bi bi-check2"></i>
            </div>
            <span className="todo-item__text">Learn the basics of Typescript</span>
            <button className="todo-item__remove-button">
              <i className="bi bi-trash3"></i>
            </button>
          </li>
          <li className="todo-item">
            <div className="todo-item__status">
              <i className="bi bi-check2"></i>
            </div>
            <span className="todo-item__text">Subscribe to the channel</span>
            <button className="todo-item__remove-button">
              <i className="bi bi-trash3"></i>
            </button>
          </li>
        </ul>

        <section className="add-todo">
          <button className="add-todo__show-form-button">
            <i className="bi bi-plus-lg"></i>
          </button>
          <form className="add-todo__form">
            <button className="close-button" type="button">
              <i className="bi bi-x"></i>
            </button>
            <div className="text-input text-input--focus">
              <input className="input" />
            </div>
            <button className="button button--filled">Add task</button>
          </form>
        </section>
      </main>

      <footer className="app-footer">2 more to do, 1 done</footer>
    </>
  );
};
