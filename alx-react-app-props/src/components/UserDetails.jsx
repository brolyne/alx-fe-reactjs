import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '2px solid darkgray', padding: '15px', margin: '15px', borderRadius: '8px', backgroundColor: 'lightgray' }}>
      <p style={{ margin: '5px 0' }}>Name: <span style={{ fontWeight: 'bold', color: 'blue' }}>{userData.name}</span></p>
      <p style={{ margin: '5px 0' }}>Email: <span style={{ fontWeight: 'bold', color: 'blue' }}>{userData.email}</span></p>
    </div>
  );
}

export default UserDetails;
