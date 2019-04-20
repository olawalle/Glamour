import React, { useState } from 'react';

export default () => {
  const [ count, setCount ] = useState(1);

  return (
    <h1 onClick={() => setCount(count+1)}>{count}</h1>
  )
}