import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage/HomePage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import FavoritesPage from './pages/FavoritesPages'
import SearchPage from './pages/SearchPage'
import AuthPage from './pages/AuthPage'

function App() {
	return (
		<Router>
			<Sidebar></Sidebar>
			<div className='App ml-20'>
				<Routes>
					<Route path='/' Component={HomePage} />
					<Route path='/profile' Component={ProfilePage} />
					<Route path='/settings' Component={SettingsPage} />
					<Route path='/favorites' Component={FavoritesPage} />
					<Route path='/search' Component={SearchPage} />
					<Route path='/auth' Component={AuthPage} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
