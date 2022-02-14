import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home"
import TourDetails from "./components/TourDetails/TourDetails";
import tourData from "./data/db.json"
import './App.css';
function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home data={tourData} />} />
        <Route path="/city/:id" element={<TourDetails data={tourData} />} />
      </Routes>
    </>
  )
}

export default App;
