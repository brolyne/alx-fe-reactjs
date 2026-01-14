function Services() {
  const services = [
    { name: 'Technology Consulting', description: 'Expert guidance on digital transformation and tech strategy' },
    { name: 'Market Analysis', description: 'Comprehensive research and insights into market trends' },
    { name: 'Product Development', description: 'From concept to launch, we guide your product journey' },
    { name: 'Business Strategy', description: 'Strategic planning to drive growth and profitability' },
    { name: 'Marketing Solutions', description: 'Creative and data-driven marketing campaigns' }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', minHeight: '400px' }}>
      <h1 style={{ color: '#333', fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>Our Services</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {services.map((service, index) => (
          <li 
            key={index}
            style={{
              backgroundColor: '#f5f5f5',
              padding: '15px',
              marginBottom: '15px',
              borderLeft: '4px solid #007bff',
              borderRadius: '4px'
            }}
          >
            <h3 style={{ color: '#333', margin: '0 0 8px 0' }}>{service.name}</h3>
            <p style={{ color: '#666', margin: 0 }}>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
