import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../components/Login";
import Signup from  "../components/Signup";
import Home from "../components/Home";
import { Navbar } from '../components/Navbar';
import Dashboard  from '../components/Dashboard';
import TrailingCursor from '../components/TrailingCursor';
import Events from  '../components/eventsData';


export default function App() {

  return (
    <div className="relative min-h-screen transition-colors duration-300 bg-lightPurple-100 dark:bg-gray-800 cursor-none">
      
      {/* Trailing Cursor */}
      <TrailingCursor /> {/* If you intend to have a trailing cursor across the app */}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/events" element={<Events />} />

          {/* Catch-all route for 404 page */}
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}
