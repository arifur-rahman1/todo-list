import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Home/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Navbar';
import Tasklist from './Components/To-do/Tasklist';
import UpdateTask from './Components/To-do/UpdateTask';
import CalenderDate from './Components/Calender/CalenderDate';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/todo' element={<Tasklist></Tasklist>}></Route>
        <Route path='/calender' element={<CalenderDate></CalenderDate>}></Route>
        <Route path='/update/:id' element={<UpdateTask></UpdateTask>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
