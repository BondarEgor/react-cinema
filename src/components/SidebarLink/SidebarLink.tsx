import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface SidebarLinkProps {
	href: string
	icon: ReactNode
}
export default function SidebarLink({ href, icon }: SidebarLinkProps) {
	return (
		<li>
			<Link
				to={href}
				className='flex items-center p-2 text-gray-900 rounded-lg dark:text-[#65676A] hover:bg-gray-100 dark:hover:bg-gray-700 group dark:hover:text-white'
			>
				<div>{icon}</div>
			</Link>
		</li>
	)
}
