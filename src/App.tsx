import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import { Routings } from './routes'
function App() {
	return (
		<Router>
			<Sidebar></Sidebar>
			<div className='ml-20 mt-4'>
				<Routings/>
			</div>
		</Router>
	)
}

export default App
