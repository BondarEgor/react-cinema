import { Login, Logout } from "@mui/icons-material";
import "./styles.css";
import { links } from "./constants";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  const activeLink = links.findIndex((link) => {
    return location.pathname.includes(link.href);
  });

  function handleAuthClick() {
    if (loggedIn) {
      localStorage.removeItem("token");
      setLoggedIn(false);
    } else {
      console.log(1);
    }
  }

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar container">
          <ul className="sidebar-list">
            {links.map((link) => (
              <Link
                key={link.id}
                to={`/${link.href}`}
                className={`sidebar-link ${
                  activeLink === link.id ? "active" : ""
                }`}
              >
                <div>{link.icon}</div>
              </Link>
            ))}
          </ul>
          <div className="logout">
            <Link 
            onClick={handleAuthClick}
            className="sidebar-link" to={loggedIn ? "#" : "/auth"}>
              <div>{loggedIn ? <Login /> : <Logout />}</div>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
