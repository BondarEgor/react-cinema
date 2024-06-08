import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import { Routings } from './routes'
function App() {
	return (
		<Router>
			<div className='flex w-screen h-screen'>
				<Sidebar></Sidebar>
				<div className='mx-10 mt-8 flex-1'>
					<Routings />
				</div>
			</div>
		</Router>
	)
}

export default App
