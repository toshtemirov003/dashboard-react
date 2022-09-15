import { CardOverview } from "../../components/CardOverview/CardOverview";
import { Tasks } from "../../components/Tasks/Tasks";
import { Trends } from "../../components/Trends/Trends";
import { UnresolvedTickets } from "../../components/UnresolvedTickets/UnresolvedTickets";
import "./home.css";

export const Home = () => {
  return (
    <div className="overview-section">
      <div className="overview">
        <CardOverview title="Unresolved" num="60" path="one" />
        <CardOverview title="Overdue" num="16" path="two" />
        <CardOverview title="Open" num="43" path="three" />
        <CardOverview title="On hold" num="64" path="four" />
      </div>

      <Trends />

      <div className="overview-section__content content-bottom">
        <UnresolvedTickets/>
        <Tasks/>
      </div>
    </div>
  );
};
