import "./tasks.css";

export const Tasks = () => {
  return (
    <div className="tasks">
      <div className="tasks__heading">
        <div>
          <h3 className="tasks__title">Tasks</h3>
          <p className="tasks__desc">Today</p>
        </div>
        <a className="tasks__link" href="#">
          View details
        </a>
      </div>
      <form className="tasks__form">
        <input
          className="tasks__inp"
          type="text"
          placeholder="Create new task"
        />
        <button className="tasks__btn">+</button>
      </form>
      <ul className="tasks__list">
        <li className="tasks__item">
          <div className="tasks__item-content">
            <input className="tasks__check" type="radio" />
            <p className="tasks__item-desc">Finish ticket update</p>
          </div>
          <button className="tasks__item-btn tasks__item-btn--urgent ">Urgent</button>
        </li>
        <li className="tasks__item">
          <div className="tasks__item-content">
            <input className="tasks__check" type="radio" />
            <p className="tasks__item-desc">Create new ticket example</p>
          </div>
          <button className="tasks__item-btn tasks__item-btn--new">New</button>
        </li>
        <li className="tasks__item">
          <div className="tasks__item-content">
            <input className="tasks__check" type="radio" defaultChecked />
            <p className="tasks__item-desc">Update ticket report</p>
          </div>
          <button className="tasks__item-btn tasks__item-btn--default">Default</button>
        </li>
      </ul>
    </div>
  );
};
