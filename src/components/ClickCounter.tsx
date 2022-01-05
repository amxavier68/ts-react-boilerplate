import React, { useState } from 'react';

export const ClickCounter:Function = () => {
  const [ count, setCount ] = useState<number>(0);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </div>
  )
}