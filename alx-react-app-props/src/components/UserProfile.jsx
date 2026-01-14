function UserProfile(props) {
  return (
    <div style={{ border: '2px solid darkgray', padding: '15px', margin: '15px', borderRadius: '8px', backgroundColor: 'lightgray' }}>
      <h2 style={{ color: 'blue', fontSize: '24px', marginTop: '0' }}>{props.name}</h2>
      <p style={{ margin: '10px 0' }}>Age: <span style={{ fontWeight: 'bold', color: 'black' }}>{props.age}</span></p>
      <p style={{ margin: '10px 0', color: 'gray', fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
  )
}

export default UserProfile
