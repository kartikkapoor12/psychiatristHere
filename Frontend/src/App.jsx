import './App.css'
import ReactDOM from "react-dom/client";
import Home from './pages/Home/Home'
import BookAppointment  from './pages/BookAppointment/BookAppointment';
import DoneWithBooking from './pages/DoneWithBooking/DoneWithBooking';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  return(
    <div className="App">
     
    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/bookAppointment" element={<BookAppointment />} />      
          <Route path="/doneWithBooking" element={<DoneWithBooking />} />     
      </Routes>
    </BrowserRouter>
    </div>
  );
  
}

export default App
