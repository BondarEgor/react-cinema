import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { Routings } from './routes';
function App() {
  return (
    <Router>
          <Routings />
    </Router>
  );
}

export default App;
