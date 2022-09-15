import "./Sidebar.css";
import { useState } from "react";
import { SidebarNav } from "../SidebarNav/SidebarNav.js";
import { SidebarWrapper } from "../SidebarWrapper/SidebarWrapper.js";
import siteLogo from "../../assets/Images/Logo.svg";
import { Link } from "react-router-dom";

// import icon
import {
  overviewIcon,
  ticketsIcon,
  ideasIcon,
  contactsIcon,
  agentsIcon,
  articlesIcon,
  settingsIcon,
  subscriptionIcon,
} from "../../assets/icons/icon";

export const Sidebar = () => {
  const [active, setActive] = useState("overview");

  return (
    <div className="sidebar">
      <Link className="sidebar__logo" to="/">
        <img
          className="sidebar__logo-img"
          src={siteLogo}
          alt="Image"
          width={180}
          height={32}
        />
      </Link>

      <SidebarWrapper>
        <SidebarNav
          title="Overview"
          icons={overviewIcon}
          active={active}
          setActive={setActive}
          status={"overview"}
          path="/"
        />
        <SidebarNav
          title="Tickets"
          icons={ticketsIcon}
          active={active}
          setActive={setActive}
          status={"tickets"}
          path="/tickets"
        />
        <SidebarNav
          title="Ideas"
          icons={ideasIcon}
          active={active}
          setActive={setActive}
          status={"ideas"}
          path="/ideas"
        />
        <SidebarNav
          title="Contact"
          icons={contactsIcon}
          active={active}
          setActive={setActive}
          status={"contact"}
          path="/contact"
        />
        <SidebarNav
          title="Agents"
          icons={agentsIcon}
          active={active}
          setActive={setActive}
          status={"agents"}
          path="/agents"
        />
        <SidebarNav
          title="Articles"
          icons={articlesIcon}
          active={active}
          setActive={setActive}
          status={"articles"}
          path="/articles"
        />
        <SidebarNav
          title="Settings"
          icons={settingsIcon}
          active={active}
          setActive={setActive}
          status={"settings"}
          path="/settings"
        />
        <SidebarNav
          title="Subscription"
          icons={subscriptionIcon}
          active={active}
          setActive={setActive}
          status={"subscription"}
          path="/subscribtion"
        />
      </SidebarWrapper>
    </div>
  );
};
