import {
  BookmarkBorder,
  Home,
  PersonOutlineOutlined,
  Search,
  Settings,
} from '@mui/icons-material';

export const links = [
  { href: 'home', icon: <Home /> },
  { href: 'profile', icon: <PersonOutlineOutlined />, label: 'Profile' },
  { href: 'settings', icon: <Settings /> },
  { href: 'favorites', icon: <BookmarkBorder /> },
  { href: 'search', icon: <Search /> },
];
