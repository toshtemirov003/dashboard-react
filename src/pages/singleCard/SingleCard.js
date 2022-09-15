import { useParams } from "react-router-dom";
import "./singleCard.css";

export const SingleCard = () => {
  const { id } = useParams();
  return <h1 className="singleCard">SingleCard {id}</h1>;
};
