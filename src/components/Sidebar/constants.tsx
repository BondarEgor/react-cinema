import {
  BookmarkBorder,
  Home,
  PersonOutlineOutlined,
  Search,
  Settings,
} from "@mui/icons-material";

export const links = [
  { id: 0, href: "home", icon: <Home /> },
  { id: 1, href: "profile", icon: <PersonOutlineOutlined />, label: "Profile" },
  { id: 2, href: "favorites", icon: <BookmarkBorder /> },
  { id: 3, href: "search", icon: <Search /> },
  { id: 4, href: "settings", icon: <Settings /> },
];
