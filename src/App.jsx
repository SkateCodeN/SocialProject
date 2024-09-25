import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
import Login from './Login'
import "./css/framework.css";
import "./css/theme.css";
import Signup from './SignUp';
import EventCard from './EventCard';
import CreateEvent from './CreateEvent';
import ContactUs from './Pages/Contact';
import AboutUs from './Pages/About';
import HomePage from './Pages/Home';
import NavBar from "./component/Navbar";

function App() {
 
  return (
    <Router>
    <div className="layout--two-column">
      {/* Header */}
      <header className="header">
        <div className="header__logo">
          <div className="logo__icon"></div>
          <span className="logo__text">My Web App</span>
        </div>
        
        {/* NAV */}
        <NavBar />
      </header>
      
      {/* Main Content */}
      <main className="layout--two-column">
        <section className="landing-page__section__grid">
          {/* Example component (Login) */}
          
          {/* Additional content can go here */}
          <Outlet />
        </section>
        
        
       
        
      </main>
      
      

      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={< AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/register" element={<Signup />} />
      </Routes>
    </div>

    </Router>
  );
};

export default App;
