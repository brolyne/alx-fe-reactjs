import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '2px solid darkgray', padding: '20px', margin: '20px', borderRadius: '8px', backgroundColor: 'lightgray', textAlign: 'center' }}>
      <p style={{ fontSize: '18px', color: 'black' }}>Current Count: <span style={{ fontWeight: 'bold', color: 'blue' }}>{count}</span></p>
      <button onClick={() => setCount(count + 1)} style={{ padding: '10px 20px', margin: '5px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ padding: '10px 20px', margin: '5px', backgroundColor: 'gray', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ padding: '10px 20px', margin: '5px', backgroundColor: 'darkgray', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>Reset</button>
    </div>
  );
}

export default Counter;
