import React, { useState } from 'react';

function SimpleAccordion() {
  const [total, setTotal] = useState(0);
  let a = 0;
  return (
    <>
      <h1>{a}</h1>
      <button onClick={() => setTotal(total + 1)}>+1</button>
      <button onClick={() => setTotal(total - 1)}>-1</button>
      <h1>{a}</h1>
      <button onClick={() => a + 1}>+1</button>
      <button
        onClick={() => {
          a = a - 1;
          console.log('a', a);
        }}
      >
        -1
      </button>
      {console.log('a', a)}
    </>
  );
}

export default SimpleAccordion;
