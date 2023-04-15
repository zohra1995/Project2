import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Resume from './component/Resume';
import Description from './component/Description';
import FillIn from './component/FillIn';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<Navbar/>}> </Route>
         </Routes>

      <Resume/>
      <Description/> 
    </div>
  );
}

export default App;
