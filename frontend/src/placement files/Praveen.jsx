import '../App.css';
import Home from '../mainpage/Home.jsx';
import About from '../mainpage/About.jsx';
import Contact from '../mainpage/contact.jsx';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function Praveen() {
  return (
    <>
      <Router>
        <header style={{ backgroundColor: '#333', padding: '10px 20px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center',width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white' }}>
              <img
                src="../src/assets/profile.jpg"
                alt="Profile"
                style={{ borderRadius: '50%', width: '40px', height: '40px' }}
              />
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Praveen</span>
            </Link>
          </div>
          <nav>
            <Link to="/" style={{ textDecoration: 'none', color: 'white', marginRight: '15px' }}>Home</Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'white', marginRight: '15px' }}>About</Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</Link>
          </nav>
        </header>
        <div id="root" style={{ paddingBottom: '50px', marginTop: '60px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer style={{
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '10px 0',
      position: 'fixed',
      bottom: 0,
      width: '100%',
    }}>
      &copy; 2024 Praveen. All Rights Reserved.
    </footer>
      </Router>
    </>
  );
}
export default Praveen;