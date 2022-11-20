import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Reservation from './components/Reservation/Reservation';
import NewUser from './components/NewUser/NewUser';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/book-reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
