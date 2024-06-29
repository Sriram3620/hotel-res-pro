import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/Home';
function App() {
  return (
   <Routes>
     <Route path='/' Component={HomePage}></Route>
   </Routes>
  );
}

export default App;
