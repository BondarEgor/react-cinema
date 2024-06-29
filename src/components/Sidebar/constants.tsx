import {
  BookmarkBorder,
  Home,
  Login,
  PersonOutlineOutlined,
  Search,
  Settings,
} from "@mui/icons-material";
import { SidebarLinksProps } from "../../types/sidebarLinksProps";

export const links: SidebarLinksProps[] = [
  { id: 0, href: "home", icon: <Home /> },
  { id: 1, href: "profile", icon: <PersonOutlineOutlined /> },
  { id: 2, href: "favorites", icon: <BookmarkBorder /> },
  { id: 3, href: "search", icon: <Search /> },
  { id: 4, href: "settings", icon: <Settings /> },
];
