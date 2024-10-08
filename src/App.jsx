
import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from './pages/HomePage';
import Service from './pages/Service';
import Staff from "./pages/Staff"
import Booking from "./pages/Booking";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="miumiu-spa/services" element={<Service />}></Route>
          <Route path="miumiu-spa/staff" element={<Staff />}></Route>
          <Route path="miumiu-spa/orders" element={<Booking />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
