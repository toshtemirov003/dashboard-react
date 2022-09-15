import { Link } from "react-router-dom";
import "./cardOverview.css";

export const CardOverview = ({ title, num, path }) => {
  return (
    <Link className="overview__card" to={`/item/${path}`}>
      <strong className="overview__card-title">{title}</strong>
      <p className="overview__card-num">{num}</p>
    </Link>
  );
};
