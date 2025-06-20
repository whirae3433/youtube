import { Outlet } from 'react-router-dom';
import './App.css';
import SearchHeader from './pages/SearchHeader';

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default App;
