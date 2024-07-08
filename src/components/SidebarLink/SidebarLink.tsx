import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SidebarLinkProps {
  href: string;
  icon: ReactNode;
  isActive: boolean;
}
export default function SidebarLink({
  href,
  icon,
  isActive,
}: SidebarLinkProps) {
  return (
    <li className="list-none">
      <Link
        to={href}
        className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-[#65676A] hover:bg-gray-100 dark:hover:bg-[#f37516] group dark:hover:text-white
				${
          isActive
            ? 'bg-[#f37516] dark:bg-[#f37516] dark:text-white'
            : 'text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
        }`}
      >
        <div>{icon}</div>
      </Link>
    </li>
  );
}
