import HomePage from './pages/HomePage/HomePage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import FavoritesPage from './pages/FavoritesPages'
import SearchPage from './pages/SearchPage'
import AuthPage from './pages/AuthPage'
import NotFoundPage from './pages/NotFoundPage'
import ErrorPage from './pages/ErrorPage'
import { useRoutes } from 'react-router-dom'

const routes = [
	{ path: '/', element: <HomePage /> },
	{ path: 'profile', element: <ProfilePage /> },
	{ path: 'settings', element: <SettingsPage /> },
	{ path: 'favorites', element: <FavoritesPage /> },
	{ path: 'search', element: <SearchPage /> },
	{ path: 'auth', element: <AuthPage /> },
	{ path: 'error', element: <ErrorPage /> },
	{ path: '*', element: <NotFoundPage /> },
]

export function Routings() {
	let routing = useRoutes(routes)
	return routing
}
