import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { Routings } from './routes';
function App() {
  return (
    <Router>
      <div className="flex w-screen h-screen">
        <Sidebar></Sidebar>
        <main
          className="mt-3 px-8 w-full max-h-screen flex flex-col"
          style={{ maxWidth: 'calc(100% - var(--sidebar-size))' }}
        >
          <Routings />
        </main>
      </div>
    </Router>
  );
}

export default App;
