import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#333',
    padding: '1rem 2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100
  };

  const navContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginRight: '2rem'
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
    cursor: 'pointer'
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: '#007bff',
    fontWeight: 'bold'
  };

  return (
    <nav style={navStyle}>
      <div style={navContainerStyle}>
        <Link to="/" style={logoStyle}>
          MyCompany
        </Link>
        <ul style={navLinksStyle}>
          <li>
            <Link 
              to="/" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#007bff'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#007bff'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#007bff'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#007bff'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
