import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { Navbar } from './components/Navbar';  // Default import
import Dashboard from './components/Dashboard';
import TrailingCursor from './components/TrailingCursor';
import Events from './components/eventsData';
import Clubs from './components/Clubs';
import Club from './components/club';
import About from "./components/About_Us";
import Error from "./components/Error";
import FAQ from "./components/FAQ"
import Contact from "./components/Contact_us";
import EventDetail from './components/EventDetail';
import Dashboard_ad from  './components/Dashboard_administrative';
import Settings from  './components/Settings';
import ProtectedRoutes from '../utils/protectedRoutes';


export default function App() {
  return (
    <div className="relative min-h-screen transition-colors duration-300 bg-lightPurple-100 dark:bg-gray-800 cursor-none">
      {/* Trailing Cursor */}
      <TrailingCursor />

      <Router>
        <Navbar />  {/* Corrected Navbar */}
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoutes/>}>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/club" element={<Club />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/dashboard_ad" element={<Dashboard_ad />} />
          <Route path="/settings" element={<Settings />} />
          {/* Catch-all route for 404 page */}
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}
