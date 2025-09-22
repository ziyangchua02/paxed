import './Navbar.css'

const Navbar = ({ onNavigate, currentPage }) => {
  const handleNavClick = (page, e) => {
    e.preventDefault()
    onNavigate(page)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a className="navbar-link">PAXED</a>
        </div>
        <ul className="navbar-menu">
          <li><a href="#home" className="navbar-link" onClick={(e) => handleNavClick('home', e)}>Home</a></li>
          <li><a href="#locations" className="navbar-link" onClick={(e) => handleNavClick('locations', e)}>Locations</a></li>
          <li><a href="#faq" className="navbar-link" onClick={(e) => handleNavClick('faq', e)}>FAQ</a></li>
          <li><a href="#contact" className="navbar-link" onClick={(e) => handleNavClick('contact', e)}>Contact Us</a></li>
          <li><a href="#login" className="navbar-link navbar-login" onClick={(e) => handleNavClick('login', e)}>Login</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
