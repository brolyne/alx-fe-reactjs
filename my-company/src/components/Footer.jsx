function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '2rem',
    marginTop: '3rem',
    borderTop: '1px solid #555'
  };

  const footerContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    marginRight: '1rem'
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <p style={{ marginBottom: '1rem' }}>
          &copy; 2024 MyCompany. All rights reserved.
        </p>
        <div style={{ marginBottom: '1rem' }}>
          <a href="#" style={linkStyle}>Privacy Policy</a>
          <a href="#" style={linkStyle}>Terms of Service</a>
          <a href="#" style={linkStyle}>Contact Us</a>
        </div>
        <p style={{ fontSize: '0.9rem', color: '#bbb' }}>
          Empowering businesses with innovative solutions since 1990.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
