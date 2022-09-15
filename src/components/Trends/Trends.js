import "./trends.css";

export const Trends = () => {
  return (
    <div className="trends">
      <div className="trends__time-wrap">
        <div className="trends__time-days-wrap">
          <h2 className="trends__time-head">Today’s trends</h2>
          <p className="trends__time-day">as of 25 May 2019, 09:41 PM</p>
        </div>
        <div className="trends__time-week-wrap">
          <span className="trends__time-today">Today</span>
          <span className="trends__time-yesterday">Yesterday</span>
        </div>
      </div>
      <ul className="trends__list">
        <li className="trends__item">
          <h3 className="trends__item-title">Resolved</h3>
          <p className="trends__item-num">449</p>
        </li>
        <li className="trends__item">
          <h3 className="trends__item-title">Received</h3>
          <p className="trends__item-num">426</p>
        </li>
        <li className="trends__item">
          <h3 className="trends__item-title">Average first response time</h3>
          <p className="trends__item-num">33m</p>
        </li>
        <li className="trends__item">
          <h3 className="trends__item-title">Average response time</h3>
          <p className="trends__item-num">3h 8m</p>
        </li>
        <li className="trends__item">
          <h3 className="trends__item-title">Resolution within SLA</h3>
          <p className="trends__item-num">94%</p>
        </li>
      </ul>
    </div>
  );
};
