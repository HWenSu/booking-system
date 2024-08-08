
import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from './pages/HomePage';
import Service from './pages/Service';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="miumiu-spa/services" element={<Service />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
