import "./unresolvedTickets.css";

export const UnresolvedTickets = () => {
  return (
    <div className="unresolved">
      <div className="unresolved__heading">
        <div>
          <h3 className="unresolved__title">Unresolved tickets</h3>
          <p className="unresolved__desc">
            Group: <span className="unresolved__desc-span">Support</span>
          </p>
        </div>
        <a className="unresolved__link" href="#">
          View details
        </a>
      </div>
      <ul className="unresolved__list">
        <li className="unresolved__item">
          <p className="unresolved__item-text">Waiting on Feature Request</p>
          <span className="unresolved__item-num">4238</span>
        </li>
        <li className="unresolved__item">
          <p className="unresolved__item-text">Awaiting Customer Response</p>
          <span className="unresolved__item-num">1005</span>
        </li>
        <li className="unresolved__item">
          <p className="unresolved__item-text">Awaiting Developer Fix</p>
          <span className="unresolved__item-num">914</span>
        </li>
        <li className="unresolved__item">
          <p className="unresolved__item-text">Pending</p>
          <span className="unresolved__item-num">281</span>
        </li>
      </ul>
    </div>
  );
};
