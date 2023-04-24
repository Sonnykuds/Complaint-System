
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='flex bg-slate-500 min-h-screen items-center justify-center'>
      <Outlet/>
    </div>
  );
}

export default App;
