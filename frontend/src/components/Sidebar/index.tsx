import { Login, Logout } from "@mui/icons-material";
import SidebarLink from "../SidebarLink/SidebarLink";
import "./styles.css";
import { links } from "./constants";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { link } from "fs";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  const activeLink = links.findIndex((link) =>
    location.pathname.includes(link.href)
  );

  function handleAuthClick() {
    if (loggedIn) {
      localStorage.removeItem("token");
      setLoggedIn(false);
    } else {
      navigate("/auth");
    }
  }

  return (
    <>
      <aside className="sidebar h-screen">
        <div className="sidebar container">
          <ul className="space-y-2 font-medium">
            {links.map((link, index) => (
              <SidebarLink
                isActive={activeLink === link.id}
                key={index}
                icon={link.icon}
                href={`/${link.href}`}
              />
            ))}
          </ul>
          <div className="logout">
            <Link onClick={handleAuthClick} to={loggedIn ? "#" : "/auth"}>
              {loggedIn ? <Logout /> : <Login />}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
