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
	]
	return (
		<>
			<aside
				className='fixed top-0 left-0 z-40  h-screen transition-transform -translate-x-full sm:translate-x-0'
				aria-label='Sidebar'
			>
				<div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-[#202226] flex flex-col'>
					<ul className='space-y-2 font-medium flex-grow'>
						{links.map((link, index) => (
							<SidebarLink key={index} icon={link.icon} href={link.href} />
						))}
					</ul>
					<div className='mt-auto'>
						<SidebarLink icon={<Logout/>} href='auth'/>
						</div>
				</div>
			</aside>
		</>
	)
}
