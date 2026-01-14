function UserProfile(props) {
  return (
    <div style={{ border: '2px solid #333', padding: '15px', margin: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#0066cc', fontSize: '24px', marginTop: '0' }}>{props.name}</h2>
      <p style={{ margin: '10px 0' }}>Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{props.age}</span></p>
      <p style={{ margin: '10px 0', color: '#666', fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
  )
}

export default UserProfile
