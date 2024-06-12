import { Logout } from '@mui/icons-material';
import SidebarLink from '../SidebarLink/SidebarLink';
import './Sidebar.css';
import { links } from './links';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);
  return (
    <>
      <aside className="sidebar h-screen">
        <div className="sidebar container">
          <ul className="space-y-2 font-medium">
            {links.map((link, index) => (
              <SidebarLink
                isActive={active === `/${link.href}`}
                onClick={() => setActive(link.href)}
                key={index}
                icon={link.icon}
                href={link.href}
              />
            ))}
          </ul>
          <div className="logout">
            <SidebarLink
              isActive={active === '/auth'}
              onClick={() => setActive('/auth')}
              icon={<Logout />}
              href="auth"
            />
          </div>
        </div>
      </aside>
    </>
  );
}
