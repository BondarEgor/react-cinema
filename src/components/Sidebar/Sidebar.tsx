import { Login, Logout } from "@mui/icons-material";
import SidebarLink from "../SidebarLink/SidebarLink";
import "./Sidebar.css";
import { links } from "./links";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

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
                isActive={active === `/${link.href}`}
                onClick={() => setActive(`/${link.href}`)}
                key={index}
                icon={link.icon}
                href={`/${link.href}`}
              />
            ))}
          </ul>
          <div className="logout">
            <SidebarLink
              isActive={active === "/auth"}
              onClick={handleAuthClick}
              icon={loggedIn ? <Logout /> : <Login />}
              href={loggedIn ? "#" : "/auth"}
            />
          </div>
        </div>
      </aside>
    </>
  );
}
