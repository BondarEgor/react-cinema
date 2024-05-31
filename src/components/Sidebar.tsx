import SidebarLink from './SidebarLink/SidebarLink'
import {
	BookmarkBorder,
	Home,
	Logout,
	PersonOutlineOutlined,
	Search,
	Settings,
} from '@mui/icons-material'

export default function Sidebar() {
	const links = [
		{ href: '/', icon: <Home /> },
		{ href: 'profile', icon: <PersonOutlineOutlined />, label: 'Profile' },
		{ href: 'settings', icon: <Settings /> },
		{ href: 'favorites', icon: <BookmarkBorder /> },
		{ href: 'search', icon: <Search /> },
		{ href: 'auth', icon: <Logout /> },
	]
	return (
		<>
			<aside
				id='default-sidebar'
				className='fixed top-0 left-0 z-40  h-screen transition-transform -translate-x-full sm:translate-x-0'
				aria-label='Sidebar'
			>
				<div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
					<ul className='space-y-2 font-medium'>
						{links.map((link, index) => (
							<SidebarLink key={index} icon={link.icon} href={link.href} />
						))}
					</ul>
				</div>
			</aside>
		</>
	)
}
