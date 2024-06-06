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
				className='pt-5 h-screen transition-transform -translate-x-full sm:translate-x-0'
				aria-label='Sidebar'
			>
				<div className='py-2 px-4 h-full bg-gray-50 dark:bg-[#202226] flex flex-col'>
					<ul className='space-y-2 font-medium '>
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
