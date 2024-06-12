import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';

interface SidebarLinkProps {
  href: string;
  icon: ReactNode;
  isActive: boolean;
  onClick: () => void;
}
export default function SidebarLink({
  href,
  icon,
  isActive,
  onClick,
}: SidebarLinkProps) {
  return (
    <li className="list-none">
      <Link
        to={href}
        onClick={onClick}
        className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-[#65676A] hover:bg-gray-100 dark:hover:bg-gray-700 group dark:hover:text-white
				${
          isActive
            ? 'bg-gray-100 dark:bg-gray-700 dark:text-white'
            : 'text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
        }`}
      >
        <div>{icon}</div>
      </Link>
    </li>
  );
}
